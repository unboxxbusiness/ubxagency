#!/bin/bash

echo "🚀 Building UBX Agency website..."

# Clear previous builds
rm -rf .next out

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Run the build
echo "🔨 Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"
