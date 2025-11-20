#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListResourcesRequestSchema, ListToolsRequestSchema, ReadResourceRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, 'docs');

class DesignSystemMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'ignition-design-system-guideline',
        version: '1.0.0',
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      }
    );

    // Initialize content cache for frequently accessed docs
    this.contentCache = new Map();
    this.CACHE_MAX_SIZE = 30; // Cache up to 30 docs
    this.CACHE_TTL = 5 * 60 * 1000; // 5 minutes

    // Component synonym mapping
    this.synonyms = {
      'cta': ['button', 'call-to-action'],
      'nav': ['navigation', 'menu'],
      'dropdown': ['select', 'picker'],
      'popup': ['modal', 'dialog'],
      'alert': ['notification', 'toast', 'banner'],
      'form': ['input', 'text-input', 'text-area'],
      'icon': ['icons'],
      'color': ['colors', 'palette'],
      'spacing': ['layout', 'grid'],
      'font': ['typography', 'type'],
    };

    this.setupHandlers();
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupHandlers() {
    // List all available resources (markdown files)
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const resources = this.getAllMarkdownFiles();
      return {
        resources: resources.map(file => ({
          uri: `design-system:///${file.category}/${file.name}`,
          name: `${file.category} > ${file.title}`,
          mimeType: 'text/markdown',
          description: `Design system documentation for ${file.title}`,
        })),
      };
    });

    // Read a specific resource
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;
      const match = uri.match(/design-system:\/\/\/(.+)\/(.+)/);

      if (!match) {
        throw new Error(`Invalid URI format: ${uri}`);
      }

      const [, category, name] = match;
      const cacheKey = `${category}/${name}`;

      try {
        // Check cache first
        let content = this.getCachedContent(cacheKey);

        if (!content) {
          // Read from disk and cache
          const filePath = join(DOCS_DIR, category, `${name}.md`);
          content = readFileSync(filePath, 'utf-8');
          this.setCachedContent(cacheKey, content);
        }

        return {
          contents: [{
            uri,
            mimeType: 'text/markdown',
            text: content,
          }],
        };
      } catch (error) {
        throw new Error(`Failed to read resource: ${error.message}`);
      }
    });

    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'search_design_system',
            description: 'Search the Ignition Spark Design System documentation by keyword or component name. Use this when users ask about design system components, patterns, foundations, or guidelines. Returns matching components like Button, Modal, Typography, Colors, etc.',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query (component name, keyword, or concept)',
                },
                category: {
                  type: 'string',
                  description: 'Optional: Filter by category (components, foundations, content, etc.)',
                  enum: ['components', 'foundations', 'content', 'layouts', 'system-feedback', 'all'],
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'get_component',
            description: 'Get full documentation for a specific Ignition Spark component or guideline. Use this when users ask for details about a known component (Button, Modal, Input, etc.) or foundation (Typography, Colors, Spacing, etc.). Returns complete documentation including variants, usage, accessibility, and examples.',
            inputSchema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Component or guideline name (e.g., "button", "modal", "typography")',
                },
              },
              required: ['name'],
            },
          },
          {
            name: 'review_design_pattern',
            description: 'Review a design pattern choice against Ignition Spark Design System guidelines. Use this when users share Figma designs or ask if they are using a component correctly. Validates component usage, variants, and patterns against official guidelines.',
            inputSchema: {
              type: 'object',
              properties: {
                component: {
                  type: 'string',
                  description: 'Component or pattern being used (e.g., "modal", "button", "alert")',
                },
                context: {
                  type: 'string',
                  description: 'Context of usage (e.g., "showing a deletion confirmation", "primary action on a form")',
                },
                variant: {
                  type: 'string',
                  description: 'Optional: Specific variant being considered (e.g., "primary", "secondary", "destructive")',
                },
              },
              required: ['component', 'context'],
            },
          },
          {
            name: 'compare_patterns',
            description: 'Compare two Ignition Spark design patterns or components to understand when to use each. Use this when users ask "Should I use X or Y?" or need help choosing between alternatives like Modal vs Drawer, Primary vs Secondary button, etc.',
            inputSchema: {
              type: 'object',
              properties: {
                option_a: {
                  type: 'string',
                  description: 'First option (e.g., "modal")',
                },
                option_b: {
                  type: 'string',
                  description: 'Second option (e.g., "drawer")',
                },
                use_case: {
                  type: 'string',
                  description: 'Optional: Specific use case to help with comparison',
                },
              },
              required: ['option_a', 'option_b'],
            },
          },
          {
            name: 'get_usage_guidelines',
            description: 'Get specific usage guidelines, best practices, and dos/don\'ts for an Ignition Spark component or pattern. Use this when users ask focused questions about accessibility, variants, best practices, or anatomy of a specific component. More targeted than get_component.',
            inputSchema: {
              type: 'object',
              properties: {
                component: {
                  type: 'string',
                  description: 'Component name (e.g., "button", "empty-states", "error-handling")',
                },
                focus: {
                  type: 'string',
                  description: 'Optional: Focus area (e.g., "accessibility", "best-practices", "variants")',
                  enum: ['all', 'usage', 'accessibility', 'best-practices', 'variants', 'anatomy'],
                },
              },
              required: ['component'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'search_design_system') {
        return this.searchDesignSystem(args.query, args.category);
      } else if (name === 'get_component') {
        return this.getComponent(args.name);
      } else if (name === 'review_design_pattern') {
        return this.reviewDesignPattern(args.component, args.context, args.variant);
      } else if (name === 'compare_patterns') {
        return this.comparePatterns(args.option_a, args.option_b, args.use_case);
      } else if (name === 'get_usage_guidelines') {
        return this.getUsageGuidelines(args.component, args.focus);
      }

      throw new Error(`Unknown tool: ${name}`);
    });
  }

  getAllMarkdownFiles() {
    const files = [];

    const scanDirectory = (dir, category = '') => {
      const entries = readdirSync(dir);

      for (const entry of entries) {
        const fullPath = join(dir, entry);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          scanDirectory(fullPath, entry);
        } else if (entry.endsWith('.md')) {
          const content = readFileSync(fullPath, 'utf-8');
          const titleMatch = content.match(/^title: (.+)$/m);
          const title = titleMatch ? titleMatch[1] : entry.replace('.md', '');

          files.push({
            category: category,
            name: entry.replace('.md', ''),
            title: title,
            path: fullPath,
          });
        }
      }
    };

    scanDirectory(DOCS_DIR);
    return files;
  }

  getCachedContent(key) {
    const cached = this.contentCache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.content;
    }
    return null;
  }

  setCachedContent(key, content) {
    // Implement LRU eviction
    if (this.contentCache.size >= this.CACHE_MAX_SIZE) {
      const firstKey = this.contentCache.keys().next().value;
      this.contentCache.delete(firstKey);
    }
    this.contentCache.set(key, {
      content,
      timestamp: Date.now(),
    });
  }

  expandQueryWithSynonyms(query) {
    const searchTerms = [query.toLowerCase()];
    const queryLower = query.toLowerCase();

    // Check if query matches any synonym key
    if (this.synonyms[queryLower]) {
      searchTerms.push(...this.synonyms[queryLower]);
    }

    // Check if query matches any synonym value (reverse lookup)
    for (const [key, values] of Object.entries(this.synonyms)) {
      if (values.some(v => v === queryLower)) {
        searchTerms.push(key, ...values);
      }
    }

    // Remove duplicates
    return [...new Set(searchTerms)];
  }

  searchDesignSystem(query, category = 'all') {
    const files = this.getAllMarkdownFiles();
    const searchQuery = query.toLowerCase();

    // Expand query with synonyms
    const searchTerms = this.expandQueryWithSynonyms(searchQuery);

    // Calculate relevance scores
    const results = files
      .map(file => {
        if (category !== 'all' && file.category !== category) {
          return null;
        }

        let score = 0;
        const title = file.title.toLowerCase();
        const name = file.name.toLowerCase();
        const content = readFileSync(file.path, 'utf-8').toLowerCase();

        // Check all search terms (original + synonyms)
        for (const term of searchTerms) {
          const isOriginalQuery = term === searchQuery;
          const multiplier = isOriginalQuery ? 1.0 : 0.7; // Synonym matches worth 70%

          // Title match (highest weight)
          if (title.includes(term)) {
            score += 100 * multiplier;
            if (title === term) score += 50 * multiplier; // Exact match bonus
          }

          // Name match (high weight)
          if (name.includes(term)) {
            score += 80 * multiplier;
          }

          // Category match (medium weight) - Components are most common
          if (file.category.includes(term)) {
            score += 40 * multiplier;
          }

          // Content match (lower weight)
          if (content.includes(term)) {
            score += 10 * multiplier;
            const occurrences = (content.match(new RegExp(term, 'g')) || []).length;
            score += Math.min(occurrences, 20) * multiplier;
          }
        }

        return { file, score };
      })
      .filter(item => item && item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(item => {
        const content = readFileSync(item.file.path, 'utf-8');
        return {
          title: item.file.title,
          category: item.file.category,
          relevance_score: Math.round(item.score),
          uri: `design-system:///${item.file.category}/${item.file.name}`,
          preview: content.substring(0, 300) + '...',
        };
      });

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          query,
          results,
          count: results.length,
          expanded_search_terms: searchTerms.length > 1 ? searchTerms : null,
        }, null, 2),
      }],
    };
  }

  getComponent(name) {
    const files = this.getAllMarkdownFiles();
    const searchName = name.toLowerCase().replace(/\s+/g, '-');

    const file = files.find(f => f.name.toLowerCase() === searchName);

    if (!file) {
      return {
        content: [{
          type: 'text',
          text: `Component "${name}" not found. Available components:\n${files.filter(f => f.category === 'components').map(f => f.title).join(', ')}`,
        }],
      };
    }

    const content = readFileSync(file.path, 'utf-8');
    return {
      content: [{
        type: 'text',
        text: content,
      }],
    };
  }

  reviewDesignPattern(component, context, variant) {
    const files = this.getAllMarkdownFiles();
    const searchName = component.toLowerCase().replace(/\s+/g, '-');

    // Find the component documentation
    const file = files.find(f => f.name.toLowerCase() === searchName);

    if (!file) {
      return {
        content: [{
          type: 'text',
          text: `Component "${component}" not found in design system. Please check the component name.`,
        }],
      };
    }

    const content = readFileSync(file.path, 'utf-8');

    // Extract relevant sections for review
    const sections = {
      usage: this.extractSection(content, ['Usage Guidelines', 'When to use', 'Usage', 'Use cases']),
      variants: this.extractSection(content, ['Variants', 'Types', 'States']),
      bestPractices: this.extractSection(content, ['Best Practices', 'Do', 'Don\'t', 'Dos and Don\'ts']),
      anatomy: this.extractSection(content, ['Anatomy', 'Structure', 'Components']),
    };

    // Build review response
    let review = `# Design Pattern Review: ${component}\n\n`;
    review += `**Context**: ${context}\n`;
    if (variant) {
      review += `**Variant**: ${variant}\n`;
    }
    review += `\n---\n\n`;

    // Add usage guidelines
    if (sections.usage) {
      review += `## Usage Guidelines\n\n${sections.usage}\n\n`;
    }

    // Add variant information if specified
    if (variant && sections.variants) {
      review += `## Variant Information\n\n${sections.variants}\n\n`;
    }

    // Add best practices
    if (sections.bestPractices) {
      review += `## Best Practices\n\n${sections.bestPractices}\n\n`;
    }

    // Add full documentation reference
    review += `\n---\n\n`;
    review += `**Full Documentation**: design-system:///${file.category}/${file.name}\n\n`;
    review += `For complete details, use the \`get_component\` tool with component name: "${component}"`;

    return {
      content: [{
        type: 'text',
        text: review,
      }],
    };
  }

  comparePatterns(option_a, option_b, use_case) {
    const files = this.getAllMarkdownFiles();

    // Find both components
    const searchNameA = option_a.toLowerCase().replace(/\s+/g, '-');
    const searchNameB = option_b.toLowerCase().replace(/\s+/g, '-');

    const fileA = files.find(f => f.name.toLowerCase() === searchNameA);
    const fileB = files.find(f => f.name.toLowerCase() === searchNameB);

    if (!fileA || !fileB) {
      const missing = [];
      if (!fileA) missing.push(option_a);
      if (!fileB) missing.push(option_b);
      return {
        content: [{
          type: 'text',
          text: `Components not found: ${missing.join(', ')}. Please check the component names.`,
        }],
      };
    }

    const contentA = readFileSync(fileA.path, 'utf-8');
    const contentB = readFileSync(fileB.path, 'utf-8');

    // Extract key sections for comparison
    const extractForComparison = (content) => ({
      overview: this.extractSection(content, ['Overview', 'Description']),
      usage: this.extractSection(content, ['Usage Guidelines', 'When to use', 'Usage']),
      bestPractices: this.extractSection(content, ['Best Practices', 'Do', 'Don\'t']),
    });

    const dataA = extractForComparison(contentA);
    const dataB = extractForComparison(contentB);

    // Build comparison
    let comparison = `# Pattern Comparison: ${option_a} vs ${option_b}\n\n`;
    if (use_case) {
      comparison += `**Use Case**: ${use_case}\n\n`;
    }
    comparison += `---\n\n`;

    // Compare overviews
    comparison += `## ${option_a}\n\n`;
    if (dataA.overview) {
      comparison += `${dataA.overview}\n\n`;
    }
    if (dataA.usage) {
      comparison += `### When to Use\n\n${dataA.usage}\n\n`;
    }

    comparison += `## ${option_b}\n\n`;
    if (dataB.overview) {
      comparison += `${dataB.overview}\n\n`;
    }
    if (dataB.usage) {
      comparison += `### When to Use\n\n${dataB.usage}\n\n`;
    }

    // Add best practices for both
    comparison += `---\n\n## Best Practices Comparison\n\n`;
    comparison += `### ${option_a}\n\n`;
    if (dataA.bestPractices) {
      comparison += `${dataA.bestPractices}\n\n`;
    } else {
      comparison += `No specific best practices documented.\n\n`;
    }

    comparison += `### ${option_b}\n\n`;
    if (dataB.bestPractices) {
      comparison += `${dataB.bestPractices}\n\n`;
    } else {
      comparison += `No specific best practices documented.\n\n`;
    }

    // Add references
    comparison += `\n---\n\n`;
    comparison += `**Full Documentation**:\n`;
    comparison += `- ${option_a}: design-system:///${fileA.category}/${fileA.name}\n`;
    comparison += `- ${option_b}: design-system:///${fileB.category}/${fileB.name}\n`;

    return {
      content: [{
        type: 'text',
        text: comparison,
      }],
    };
  }

  getUsageGuidelines(component, focus = 'all') {
    const files = this.getAllMarkdownFiles();
    const searchName = component.toLowerCase().replace(/\s+/g, '-');

    const file = files.find(f => f.name.toLowerCase() === searchName);

    if (!file) {
      return {
        content: [{
          type: 'text',
          text: `Component "${component}" not found. Available components:\n${files.map(f => f.title).join(', ')}`,
        }],
      };
    }

    const content = readFileSync(file.path, 'utf-8');

    // Extract sections based on focus
    let guidelines = `# Usage Guidelines: ${component}\n\n`;

    if (focus === 'all' || focus === 'usage') {
      const usage = this.extractSection(content, ['Usage Guidelines', 'When to use', 'Usage']);
      if (usage) {
        guidelines += `## Usage\n\n${usage}\n\n`;
      }
    }

    if (focus === 'all' || focus === 'accessibility') {
      const accessibility = this.extractSection(content, ['Accessibility', 'A11y', 'ARIA']);
      if (accessibility) {
        guidelines += `## Accessibility\n\n${accessibility}\n\n`;
      }
    }

    if (focus === 'all' || focus === 'best-practices') {
      const bestPractices = this.extractSection(content, ['Best Practices', 'Do', 'Don\'t', 'Dos and Don\'ts']);
      if (bestPractices) {
        guidelines += `## Best Practices\n\n${bestPractices}\n\n`;
      }
    }

    if (focus === 'all' || focus === 'variants') {
      const variants = this.extractSection(content, ['Variants', 'Types', 'States', 'Options']);
      if (variants) {
        guidelines += `## Variants\n\n${variants}\n\n`;
      }
    }

    if (focus === 'all' || focus === 'anatomy') {
      const anatomy = this.extractSection(content, ['Anatomy', 'Structure', 'Components']);
      if (anatomy) {
        guidelines += `## Anatomy\n\n${anatomy}\n\n`;
      }
    }

    // Add reference
    guidelines += `\n---\n\n`;
    guidelines += `**Full Documentation**: design-system:///${file.category}/${file.name}\n`;

    return {
      content: [{
        type: 'text',
        text: guidelines,
      }],
    };
  }

  // Helper method to extract sections from markdown content
  extractSection(content, headings) {
    for (const heading of headings) {
      // Try different heading levels (##, ###, ####)
      const patterns = [
        new RegExp(`##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##|$)`, 'i'),
        new RegExp(`###\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n###|\\n##|$)`, 'i'),
        new RegExp(`####\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n####|\\n###|\\n##|$)`, 'i'),
      ];

      for (const pattern of patterns) {
        const match = content.match(pattern);
        if (match) {
          return match[1].trim();
        }
      }
    }
    return null;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Ignition Spark Design System MCP Server running on stdio');

    // Keep the event loop active so the MCP client has time to complete the handshake.
    const keepAlive = setInterval(() => {}, 1 << 30);

    await new Promise((resolve) => {
      this.server.onclose = () => {
        clearInterval(keepAlive);
        resolve();
      };
    });
  }
}

const server = new DesignSystemMCPServer();
server.run().catch(console.error);
