# Contributing to EPOS Platform Open Source Documentation

This repository hosts the EPOS Platform Open Source documentation using Docusaurus. Contributions are welcome from anyone—whether fixing a typo or adding comprehensive guides.

## Prerequisites

- GitHub account (free at [github.com](https://github.com))
- For local development:
  - **Node.js 18+**: Download from [nodejs.org](https://nodejs.org/) or install via package manager ([Homebrew](https://brew.sh/), etc.)
  - **Git**: Download from [git-scm.com](https://git-scm.com/) or install via package manager
  - **Text editor**: [VS Code](https://code.visualstudio.com/), Sublime Text, or your preferred editor

## Key Concepts

- **Fork**: Creates your own copy of the repository where you can make changes safely
- **Pull Request (PR)**: Proposes your changes to be merged into the main repository
- **Markdown**: Simple text formatting language used for documentation files

Your changes cannot affect the main documentation until a maintainer reviews and merges your PR.

## Quick Start: Choose Your Workflow

### Method 1: Web Editor (Recommended for Small Changes)

Best for typos, minor corrections, and single-file edits.

**Requirements**: GitHub account only  
**Time**: 5-10 minutes

### Method 2: Web Editor + New Files

Best for adding new documentation pages.

**Requirements**: GitHub account only  
**Time**: 15-30 minutes

### Method 3: Local Development

Best for multiple files, testing, or frequent contributions.

**Requirements**: GitHub account, Node.js 18+, Git  
**Time**: 45+ minutes (first time)

---

## Method 1: Quick Edits via Web Interface

1. **Fork the repository**
   - Navigate to `github.com/epos-eric/opensource-docs`
   - Click "Fork" in the top-right corner
   - Click "Create fork"

2. **Edit the file**
   - In your fork, navigate to the file (e.g., `docs/documentation/guides/example.md`)
   - Click the pencil icon (Edit this file)
   - Make your changes
   - Use the "Preview" tab to verify formatting

3. **Commit changes**
   - Scroll to "Commit changes"
   - Enter a descriptive commit message (e.g., "Fix typo in installation guide")
   - Select "Commit directly to the main branch"
   - Click "Commit changes"

4. **Create a Pull Request**
   - Click "Contribute" → "Open pull request"
   - Provide a clear title and description
   - Click "Create pull request"

A maintainer will review your PR. You'll receive email notifications for any feedback.

---

## Method 2: Adding New Documentation

Follow steps 1-4 from Method 1, with these additions:

### Creating a New File

1. Navigate to `docs/documentation/` in your fork
2. Choose the appropriate subdirectory (`guides/`, `installation/`, `reference/`)
3. Click "Add file" → "Create new file"
4. Name the file with a `.md` extension (e.g., `new-guide.md`)

### Required Frontmatter

Add this header to the top of new files:

```markdown
---
id: new-guide
title: New Guide Title
sidebar_label: Short Label
---

# New Guide Title

Your content here...
```

### Adding to Sidebar

Edit `sidebars.js` to include your new page:

```javascript
{
  type: 'category',
  label: 'Guides',
  items: [
    'documentation/guides/existing-guide',
    'documentation/guides/new-guide', // Add your page ID here
  ],
}
```

### Adding Images

1. Upload images to `static/img/` via "Add file" → "Upload files"
2. Reference in markdown: `![Alt text](/img/filename.png)`

### Markdown Reference

This site uses Docusaurus-flavored Markdown. See [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) for full documentation.

Common elements:

- Headings: `#`, `##`, `###`
- **Bold** and _italic_: `**bold**`, `*italic*`
- Links: `[text](url)`
- Images: `![alt text](/img/filename.png)`
- Code: `` `inline` `` or triple backticks for blocks

For advanced features (admonitions, tabs, code blocks with highlighting), refer to the Docusaurus documentation.

---

## Method 3: Local Development

### Initial Setup

1. **Fork and clone**

   ```bash
   git clone https://github.com/YOUR-USERNAME/opensource-docs.git
   cd opensource-docs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run start
   ```

   Opens `http://localhost:3000` with live-reloading.

### Making Changes

1. Edit files in `docs/documentation/`
2. Changes reflect automatically in the browser
3. Test build before submitting:
   ```bash
   npm run build
   ```

### Submitting Changes

1. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add guide on [topic]"
   git push origin main
   ```

2. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "Contribute" → "Open pull request"
   - Provide a clear description of changes
   - Submit the PR

---

## Project Structure

```
opensource-docs/
├── docs/
│   └── documentation/     # All documentation markdown files
│       ├── guides/
│       ├── installation/
│       └── reference/
├── static/
│   └── img/              # Images and static assets
├── sidebars.js           # Sidebar navigation configuration
└── docusaurus.config.js  # Site configuration
```

---

## Troubleshooting

### "Fork button not visible"

Ensure you're on the main repository page at `github.com/epos-eric/opensource-docs`.

### "npm install fails"

Verify Node.js version: `node --version` (must be 18+). Delete `node_modules/` and retry.

### "New page doesn't appear in sidebar"

Check that you:

- Added the page to `sidebars.js`
- Used the correct path format (`documentation/guides/page-id`)
- Included proper frontmatter with matching `id`

### "Build errors"

Common causes:

- Missing or malformed frontmatter
- Broken markdown syntax
- Invalid links or image paths

Run `npm run build` to see specific error messages.

### "Changes not showing in PR"

Ensure you committed and pushed to your fork. Additional commits to the same branch automatically update the PR.

---

## Pull Request Process

1. **Submission**: You create a PR from your fork
2. **Automated checks**: CI runs basic validation
3. **Review**: A maintainer reviews your changes
4. **Feedback**: Maintainer may request modifications
5. **Updates**: Make changes by committing to the same branch
6. **Merge**: Once approved, maintainer merges your PR
7. **Deploy**: Changes appear on the live documentation site

You receive email notifications at each step.

---

## Style Guidelines

- Use clear, concise language
- Include code examples where relevant
- Add alt text to all images
- Test all links before submitting
- Follow existing documentation structure and tone

---

## Getting Help

- Check [GitHub documentation](https://docs.github.com/en/get-started) for Git and PR basics
- Review [Markdown Guide](https://www.markdownguide.org/) for formatting
- Consult [Docusaurus documentation](https://docusaurus.io/docs) for advanced features
- Open an issue on GitHub for questions about contributing

---

## Developer Commands

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

### Build

```bash
npm run build
```

Generates static content in the `build/` directory.
