#!/bin/bash

# ANtwix Deployment Quick Start Script
# This script helps prepare your project for Vercel deployment

set -e

echo "🚀 ANtwix Deployment Quick Start"
echo "================================="
echo ""

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "❌ Node.js 18.17+ required. You have Node.js $NODE_VERSION"
  exit 1
fi
echo "✅ Node.js version OK"

# Check for .env.local
if [ ! -f ".env.local" ]; then
  echo "📝 Creating .env.local from template..."
  cp .env.example .env.local
  echo "⚠️  IMPORTANT: Edit .env.local and add your RESEND_API_KEY"
else
  echo "✅ .env.local exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build project
echo "🔨 Building for production..."
rm -rf .next
npm run build

echo ""
echo "✅ Build successful!"
echo ""
echo "📝 Next steps:"
echo "1. Verify .env.local has your RESEND_API_KEY"
echo "2. Test locally: npm run start"
echo "3. Deploy to Vercel: vercel --prod"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
