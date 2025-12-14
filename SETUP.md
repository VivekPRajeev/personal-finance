# Development Setup Guide

This guide will help you set up your development environment for the Personal Finance Manager application.

## Prerequisites Installation

### 1. Install Node.js and npm

**Windows:**
- Download and install from [nodejs.org](https://nodejs.org/)
- Choose the LTS (Long Term Support) version
- Verify installation:
  ```cmd
  node --version
  npm --version
  ```

**Linux:**
```bash
# Using NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

**macOS:**
```bash
# Using Homebrew
brew install node

# Verify installation
node --version
npm --version
```

### 2. Install Rust

**All Platforms:**
```bash
# Install Rust using rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Follow the on-screen instructions
# After installation, restart your terminal and verify:
rustc --version
cargo --version
```

### 3. Install Tauri Prerequisites

**Windows:**
1. Install [Microsoft Visual Studio C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
2. Install WebView2 (usually pre-installed on Windows 11, available via Windows Update)

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

**Linux (Fedora):**
```bash
sudo dnf install \
  webkit2gtk4.1-devel \
  openssl-devel \
  curl \
  wget \
  file \
  libappindicator-gtk3-devel \
  librsvg2-devel
```

**macOS:**
```bash
# Install Xcode Command Line Tools
xcode-select --install

# No additional dependencies needed
```

### 4. Install Docker (Optional - for containerized development)

Follow the official Docker installation guide for your platform:
- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Linux](https://docs.docker.com/engine/install/)
- [macOS](https://docs.docker.com/desktop/install/mac-install/)

## Project Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/VivekPRajeev/personal-finance.git
   cd personal-finance
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Verify Setup**
   ```bash
   # Check TypeScript compilation
   npm run build
   
   # Run linting
   npm run lint
   
   # Run tests
   npm test -- --run
   ```

## Running the Application

### Development Mode (Recommended)

```bash
# Start the Tauri application in development mode
npm run tauri:dev
```

This will:
- Start the Vite dev server
- Launch the Tauri application
- Enable hot-reload for the frontend

### Frontend Only (Without Tauri)

```bash
# Start just the Vite dev server
npm run dev
```

Access the application at `http://localhost:1420`

### Using Docker

```bash
# Start development environment with Docker
docker-compose -f docker-compose.dev.yml up

# Note: Docker primarily supports frontend development
# For full desktop app testing, use native development mode
```

## Development Tools

### VS Code (Recommended)

Recommended extensions (see `.vscode/extensions.json`):
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- rust-analyzer
- Tauri

### Editor Configuration

The project includes:
- `.vscode/` - VS Code settings
- `.prettierrc.json` - Prettier configuration
- `eslint.config.js` - ESLint configuration
- `tsconfig.json` - TypeScript configuration

## Common Commands

```bash
# Development
npm run dev              # Start Vite dev server
npm run tauri:dev        # Start Tauri in dev mode
npm run build            # Build frontend
npm run tauri:build      # Build Tauri app

# Testing
npm test                 # Run tests in watch mode
npm test -- --run        # Run tests once
npm run test:ui          # Run tests with UI
npm run test:coverage    # Run tests with coverage

# Code Quality
npm run lint             # Check code for issues
npm run lint:fix         # Fix linting issues
npm run format           # Format code
npm run format:check     # Check formatting
```

## Troubleshooting

### Build Errors

**Issue: Missing Rust toolchain**
```bash
# Ensure Rust is installed and up to date
rustup update
```

**Issue: Missing system libraries (Linux)**
```bash
# Install all required libraries
sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libssl-dev
```

**Issue: Node module errors**
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Runtime Errors

**Issue: Port 1420 already in use**
```bash
# Find and kill the process using port 1420
# Linux/macOS:
lsof -ti:1420 | xargs kill -9
# Windows:
netstat -ano | findstr :1420
# Then kill the process using Task Manager
```

**Issue: Tauri compilation errors**
```bash
# Clean Tauri build cache
cd src-tauri
cargo clean
cd ..
npm run tauri:dev
```

## Next Steps

1. Read the [CONTRIBUTING.md](CONTRIBUTING.md) guide
2. Check out the [README.md](README.md) for project overview
3. Explore the codebase starting with `src/App.tsx`
4. Run the tests to understand the testing setup
5. Make your first contribution!

## Getting Help

- Check existing [GitHub Issues](https://github.com/VivekPRajeev/personal-finance/issues)
- Review [Tauri Documentation](https://tauri.app/)
- Review [React Documentation](https://react.dev/)
- Review [Material-UI Documentation](https://mui.com/)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/)

Happy coding! 🚀
