#!/bin/bash

echo "🚀 Preparing Tax Blog Platform for Deployment..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Create a deployment info file
echo "📝 Creating deployment info..."
cat > deployment-info.txt << EOF
Tax Blog Platform - Deployment Ready
====================================
Build Date: $(date)
Node Version: $(node --version)
NPM Version: $(npm --version)

Files ready for deployment in the 'out' directory.

Quick Deploy:
- Vercel: Run 'vercel --prod'
- Netlify: Run 'netlify deploy --prod --dir=out'

Or use the web interfaces:
- Vercel: Upload this entire folder at vercel.com
- Netlify: Drag the 'out' folder to app.netlify.com
EOF

echo "✅ Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. For Vercel: Run 'npx vercel --prod'"
echo "2. For Netlify: Run 'npx netlify-cli deploy --prod --dir=out'"
echo ""
echo "Or upload manually through their web interfaces."