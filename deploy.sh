#!/bin/bash

# Exit script on first error
set -e

# Check if serve is installed, if not, install it globally
if ! command -v serve &> /dev/null
then
    echo "serve could not be found, installing it globally..."
    npm install -g serve
else
    echo "serve is already installed."
fi

# check that dependencies are installed
if [ -d "node_modules" ]; then
    echo "Dependencies have been installed..."
else
    echo "Installing app dependencies ..."
    npm install
fi

# Run tests
echo "Running tests..."
CI=true npm test

# Check if tests passed
if [ $? -ne 0 ]; then
    echo "Tests failed. Exiting..."
    exit 1
else
    echo "Tests passed!"
fi

# Build the app
echo "Building the app..."
npm run build


# Navigate to the build directory
if [ -d "build" ]; then
    echo "Navigating to the build directory..."
    cd build
else
    echo "Build directory does not exist. Please make sure you have built the app."
    exit 1
fi

# Serve the build using 'serve'
echo "Serving the build directory on http://localhost:3000..."
serve -s . &

# Wait for the server to start
sleep 3

# Open localhost:3000 in the default browser based on the OS
if which xdg-open > /dev/null; then
    # Linux
    xdg-open http://localhost:3000
elif which open > /dev/null; then
    # macOS
    open http://localhost:3000
elif which start > /dev/null; then
    # Windows
    start http://localhost:3000
else
    echo "Could not detect the OS or default browser. Please open http://localhost:3000 manually."
fi
