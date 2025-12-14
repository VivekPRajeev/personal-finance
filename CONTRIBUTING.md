# Contributing to Personal Finance Manager

Thank you for your interest in contributing to Personal Finance Manager! This document provides guidelines and instructions for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/personal-finance.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Running the Application

```bash
# Run in development mode with Tauri
npm run tauri:dev

# Run just the frontend (without Tauri)
npm run dev
```

### Code Quality

Before submitting your changes, ensure your code meets our quality standards:

```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm test
```

### Testing

- Write tests for new features
- Ensure all existing tests pass
- Aim for good test coverage

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Commit Messages

Follow conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add transaction history view
fix: correct balance calculation
docs: update installation instructions
```

## Pull Request Process

1. Update documentation if needed
2. Add or update tests as necessary
3. Ensure all tests pass
4. Ensure code is properly formatted and linted
5. Update the README if you're adding new features
6. Create a Pull Request with a clear description of changes

## Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Use functional components and hooks in React
- Keep components small and focused
- Write meaningful variable and function names

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── types/          # TypeScript type definitions
└── test/           # Test utilities and setup
```

## Need Help?

If you have questions or need help, please:
- Open an issue for bugs or feature requests
- Check existing issues for similar problems
- Reach out to maintainers

Thank you for contributing! 🎉
