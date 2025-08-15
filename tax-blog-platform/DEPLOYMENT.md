# Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

### Method A: Using Vercel CLI

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Navigate to project directory**:
```bash
cd /workspace/tax-blog-platform
```

3. **Deploy**:
```bash
vercel
```

4. **Follow the prompts**:
- Login to your Vercel account
- Select "Create a new project"
- Accept the default settings
- Your site will be deployed!

### Method B: Using GitHub + Vercel

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"

### Method C: Direct Upload

1. **Build the project**:
```bash
npm run build
```

2. **Go to Vercel Dashboard**:
- Visit [vercel.com](https://vercel.com)
- Click "New Project"
- Select "Upload Folder"
- Upload the entire project folder

## Option 2: Deploy to Netlify

### Method A: Using Netlify CLI

1. **Install Netlify CLI**:
```bash
npm i -g netlify-cli
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy**:
```bash
netlify deploy --prod
```

4. **Follow the prompts**:
- Login to your Netlify account
- Create a new site
- Set build directory to `out`

### Method B: Drag and Drop

1. **Build the project**:
```bash
npm run build
```

2. **Deploy**:
- Go to [app.netlify.com](https://app.netlify.com)
- Drag the `out` folder to the deployment area
- Your site is live!

### Method C: GitHub Integration

1. **Create netlify.toml**:
```toml
[build]
  command = "npm run build"
  publish = "out"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Push to GitHub** (same as Vercel Method B step 1)

3. **Connect to Netlify**:
- Go to [app.netlify.com](https://app.netlify.com)
- Click "New site from Git"
- Choose your repository
- Deploy!

## Environment Variables

If you need to add environment variables:

### Vercel:
- Go to Project Settings → Environment Variables
- Add your variables
- Redeploy

### Netlify:
- Go to Site Settings → Environment Variables
- Add your variables
- Redeploy

## Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS configuration steps

## Post-Deployment

1. **Test all pages**:
- Homepage
- Blog posts
- Category pages
- 404 page

2. **Check SEO**:
- Run Google PageSpeed Insights
- Test with Google Rich Results Test
- Verify meta tags

3. **Monitor**:
- Set up Google Analytics
- Configure Google Search Console
- Monitor Core Web Vitals

## Troubleshooting

### Build Errors:
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify Node version compatibility

### 404 Errors:
- Check `next.config.js` has `trailingSlash: true`
- Verify all dynamic routes are generated

### Image Issues:
- Ensure images are in `public` folder
- Update `next.config.js` image domains

## Quick Deploy Commands

### Vercel:
```bash
npm install
vercel --prod
```

### Netlify:
```bash
npm install
npm run build
netlify deploy --prod --dir=out
```