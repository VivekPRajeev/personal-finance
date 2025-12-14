# Personal Finance Manager

A cross-platform desktop application built with Tauri, React, and TypeScript to help plan, manage, and calculate finances.

## 🚀 Features

- **Cross-Platform**: Runs on Windows, Linux, and macOS
- **Modern UI**: Built with React, Material-UI (MUI), and Tailwind CSS
- **Type-Safe**: TypeScript for enhanced development experience
- **Testing**: Configured with Vitest and React Testing Library
- **Code Quality**: ESLint and Prettier for consistent code style
- **Containerized**: Docker support for both development and production environments
- **Native Performance**: Powered by Tauri for small bundle sizes and native performance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Rust](https://www.rust-lang.org/tools/install) (latest stable version)
- [Tauri Prerequisites](https://tauri.app/start/prerequisites/) for your operating system:
  - **Windows**: Microsoft Visual Studio C++ Build Tools
  - **Linux**: WebKitGTK, pkg-config, and other development libraries
  - **macOS**: Xcode Command Line Tools

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VivekPRajeev/personal-finance.git
   cd personal-finance
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Mode

Run the application in development mode with hot-reload:

```bash
npm run tauri:dev
```

Or run just the frontend (without Tauri):

```bash
npm run dev
```

### Production Build

Build the application for production:

```bash
npm run tauri:build
```

The built application will be in `src-tauri/target/release/bundle/`.

## 🐳 Docker Support

### Development Environment

Run the development environment in Docker:

```bash
docker-compose -f docker-compose.dev.yml up
```

### Production Build

Build the production Docker image:

```bash
docker-compose -f docker-compose.prod.yml build
```

**Note**: Docker is primarily for the web frontend. For full desktop app functionality, use the native build process.

## 🧪 Testing

Run tests:

```bash
npm test
```

Run tests with UI:

```bash
npm run test:ui
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 🎨 Code Quality

### Linting

Check code for issues:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

Check if code is formatted:

```bash
npm run format:check
```

## 📁 Project Structure

```
personal-finance/
├── src/                    # React frontend source code
│   ├── assets/            # Static assets
│   ├── test/              # Test setup files
│   ├── App.tsx            # Main App component
│   ├── App.test.tsx       # App component tests
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles with Tailwind directives
├── src-tauri/             # Tauri backend (Rust)
│   ├── src/               # Rust source code
│   ├── icons/             # Application icons
│   └── tauri.conf.json    # Tauri configuration
├── public/                # Public static assets
├── Dockerfile.dev         # Development Docker configuration
├── Dockerfile.prod        # Production Docker configuration
├── docker-compose.dev.yml # Development Docker Compose
├── docker-compose.prod.yml# Production Docker Compose
├── eslint.config.js       # ESLint configuration
├── .prettierrc.json       # Prettier configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Desktop Framework**: Tauri 2
- **UI Libraries**: Material-UI (MUI) + Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **Containerization**: Docker

## 📝 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build frontend for production
- `npm run tauri:dev` - Start Tauri app in development mode
- `npm run tauri:build` - Build Tauri app for production
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tauri](https://tauri.app/) - For the amazing desktop framework
- [React](https://react.dev/) - For the powerful UI library
- [Material-UI](https://mui.com/) - For beautiful React components
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS framework
