# MCP Knowledge Base

This folder contains all files needed to run the Ignition Spark Design System MCP server.

## What's Inside

- **mcp-server.js** - The MCP server that provides design system tools to AI assistants
- **docs/** - 101 markdown files containing the complete Ignition Spark Design System documentation
- **package.json** - Project dependencies and npm scripts

## Quick Start

```bash
# Install dependencies
npm install

# Start the MCP server
npm start

# Re-scrape documentation (optional)
npm run scrape

# Test scraper on 3 sample pages
npm test
```

## Using with AI Tools

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ignition-design-system-guideline": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/ignition-design-system-guideline/mcp-server.js"]
    }
  }
}
```

### Other AI Tools

This MCP server works with various AI tools. See [MCP_SETUP.md](../MCP_SETUP.md) for setup instructions for:
- Claude Desktop
- VS Code + Continue
- Claude Code CLI
- Cursor IDE
- Custom integrations

## Documentation

- [README.md](../README.md) - Main project overview
- [MCP_SETUP.md](../MCP_SETUP.md) - Complete MCP setup guide for all tools
