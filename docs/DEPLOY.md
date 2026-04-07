# GitHub Pages Deployment Guide

## Automated Deployment (Recommended)

This repository is configured for automatic deployment to GitHub Pages.

### Setup Steps:

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new public repository (e.g., `retro-landing`)

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to Settings → Pages on GitHub
   - Under "Build and deployment" → Source
   - Select "Deploy from a branch"
   - Select "gh-pages" branch, "/ (root)" folder
   - Click Save

4. **GitHub Actions will auto-deploy:**
   - The `.github/workflows/deploy.yml` workflow will trigger on every push to `main`
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Manual Deployment (Alternative)

If you want to deploy manually:

```bash
# Install gh-pages package
npm install -g gh-pages

# Deploy the dist folder
gh-pages -d dist
```

## Site URL

Once deployed, your Retro Landing Page will be available at:

**🌐 https://YOUR_USERNAME.github.io/retro-landing/**

## Features

- ✅ Automatic deployment on every push
- ✅ Custom domain support (optional)
- ✅ HTTPS enabled by default
- ✅ CDN via GitHub

## Troubleshooting

### Page returns 404?
- Wait 5-10 minutes for deployment to propagate
- Check GitHub Actions tab for build errors
- Ensure repository is public (required for free GitHub Pages)

### Styles not loading?
- Check that `assetPrefix` and `basePath` are set correctly in `next.config.js`
- Verify the dist folder contains `_next` assets

## Questions?

See GitHub Pages documentation: https://docs.github.com/en/pages
