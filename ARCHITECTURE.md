# Architecture Overview

## Technology Stack Summary

### Desktop Framework
- **Tauri 2.x**: Modern desktop application framework
  - Cross-platform support (Windows, Linux, macOS)
  - Small bundle size (~3-5MB)
  - Native OS APIs access
  - Written in Rust for security and performance

### Frontend
- **React 19**: UI library with latest features
- **TypeScript**: Type-safe JavaScript
- **Vite 7**: Fast build tool and dev server
- **Material-UI (MUI) 7**: React component library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Emotion**: CSS-in-JS for MUI

### Code Quality Tools
- **ESLint 9**: JavaScript/TypeScript linter
- **Prettier 3**: Code formatter
- **Vitest 4**: Fast unit testing framework
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Custom matchers for DOM

### Build & Development
- **npm**: Package manager
- **TypeScript Compiler**: Type checking and transpilation
- **PostCSS**: CSS processing with Tailwind
- **Docker**: Container support for development and production

## Project Structure

```
personal-finance/
│
├── src/                          # Frontend React application
│   ├── components/              # Reusable React components (future)
│   ├── pages/                   # Page components (future)
│   ├── hooks/                   # Custom React hooks (future)
│   ├── utils/                   # Utility functions (future)
│   ├── types/                   # TypeScript type definitions (future)
│   ├── test/                    # Test utilities and setup
│   │   └── setup.ts            # Vitest setup with jest-dom
│   ├── assets/                  # Static assets (images, fonts)
│   ├── App.tsx                  # Main App component
│   ├── App.test.tsx            # App component tests
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global styles with Tailwind
│   └── vite-env.d.ts           # Vite type definitions
│
├── src-tauri/                   # Tauri backend (Rust)
│   ├── src/                     # Rust source code
│   │   ├── lib.rs              # Library entry point
│   │   └── main.rs             # Binary entry point
│   ├── icons/                   # Application icons (all platforms)
│   ├── capabilities/            # Tauri security capabilities
│   ├── Cargo.toml              # Rust dependencies
│   ├── tauri.conf.json         # Tauri configuration
│   └── build.rs                # Build script
│
├── public/                      # Public static assets
│   ├── vite.svg                # Vite logo
│   └── tauri.svg               # Tauri logo
│
├── dist/                        # Build output (gitignored)
│
├── node_modules/                # npm dependencies (gitignored)
│
├── Configuration Files
│   ├── package.json             # npm dependencies and scripts
│   ├── package-lock.json        # Locked dependency versions
│   ├── tsconfig.json            # TypeScript configuration
│   ├── tsconfig.node.json       # TypeScript config for Node files
│   ├── vite.config.ts          # Vite configuration with Vitest
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── postcss.config.js       # PostCSS configuration
│   ├── eslint.config.js        # ESLint configuration
│   ├── .prettierrc.json        # Prettier configuration
│   ├── .prettierignore         # Prettier ignore patterns
│   └── index.html              # HTML entry point
│
├── Docker Files
│   ├── Dockerfile.dev           # Development container
│   ├── Dockerfile.prod          # Production container
│   ├── docker-compose.dev.yml   # Dev Docker Compose
│   ├── docker-compose.prod.yml  # Prod Docker Compose
│   └── .dockerignore            # Docker ignore patterns
│
├── Documentation
│   ├── README.md                # Project overview and quick start
│   ├── SETUP.md                 # Detailed setup instructions
│   ├── CONTRIBUTING.md          # Contribution guidelines
│   └── ARCHITECTURE.md          # This file
│
└── Other
    ├── .gitignore               # Git ignore patterns
    ├── .vscode/                 # VS Code settings
    └── LICENSE                  # MIT License
```

## Architecture Decisions

### 1. Why Tauri over Electron?
- **Size**: Tauri apps are 10-20x smaller (~3-5MB vs 50-100MB)
- **Security**: Rust's memory safety + minimal API surface
- **Performance**: Native OS rendering, no Node.js overhead
- **Cross-platform**: Single codebase for Windows, Linux, and macOS
- **Modern**: Built with latest web and systems technologies

### 2. React + TypeScript
- **React**: Component-based, large ecosystem, excellent tooling
- **TypeScript**: Type safety reduces runtime errors, better IDE support
- **Modern**: Using React 19 with latest features and improvements

### 3. MUI + Tailwind CSS
- **MUI**: Production-ready components, accessibility built-in, theming
- **Tailwind**: Fast styling, utility-first, no naming conflicts
- **Synergy**: MUI for complex components, Tailwind for custom styling
- **Flexibility**: Best of both worlds - component library + utilities

### 4. Vitest over Jest
- **Speed**: 2-10x faster than Jest
- **ESM Support**: Native ES modules, no configuration needed
- **Vite Integration**: Shares Vite config, same transformations
- **Modern**: Built for modern JavaScript/TypeScript

### 5. ESLint + Prettier
- **ESLint**: Code quality, bug prevention, best practices
- **Prettier**: Consistent formatting, zero configuration debates
- **Integration**: eslint-plugin-prettier for seamless experience

## Data Flow

### Frontend → Backend Communication

```
┌─────────────────┐
│   React App     │
│   (Frontend)    │
└────────┬────────┘
         │
         │ invoke('command')
         ↓
┌─────────────────┐
│  Tauri Bridge   │
│    (IPC)        │
└────────┬────────┘
         │
         │ Rust function call
         ↓
┌─────────────────┐
│  Rust Backend   │
│   (Tauri)       │
└─────────────────┘
```

### Example: Greeting Function

**Frontend (TypeScript):**
```typescript
import { invoke } from '@tauri-apps/api/core';

const result = await invoke('greet', { name: 'John' });
```

**Backend (Rust):**
```rust
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

## Development Workflow

### 1. Local Development
```bash
npm run tauri:dev
```
- Starts Vite dev server (port 1420)
- Launches Tauri application
- Hot reload on file changes
- Rust compilation on backend changes

### 2. Testing
```bash
npm test           # Watch mode
npm test -- --run  # Single run
npm run test:ui    # Visual test UI
```

### 3. Linting & Formatting
```bash
npm run lint       # Check for issues
npm run format     # Format code
```

### 4. Building
```bash
npm run tauri:build
```
- Builds frontend (Vite)
- Compiles Rust (Cargo)
- Creates platform-specific bundles
  - Windows: .exe, .msi
  - Linux: .deb, .appimage
  - macOS: .app, .dmg

### 5. Docker Development
```bash
docker-compose -f docker-compose.dev.yml up
```
- Frontend development in container
- Hot reload enabled
- Good for consistent environments

## Security Considerations

### Tauri Security Features
1. **CSP (Content Security Policy)**: Configured in tauri.conf.json
2. **Capability-based**: Explicit API permissions required
3. **No Node.js**: Eliminates entire class of vulnerabilities
4. **Rust Backend**: Memory-safe by default
5. **IPC Validation**: Type-checked message passing

### Best Practices
- Never disable security features
- Validate all user inputs
- Use TypeScript for type safety
- Keep dependencies updated
- Run security audits: `npm audit`

## Testing Strategy

### Unit Tests
- Component logic testing
- Utility function testing
- Using Vitest + React Testing Library

### Integration Tests (Future)
- User flow testing
- API integration testing
- End-to-end scenarios

### Manual Testing
- Cross-platform verification
- UI/UX validation
- Performance testing

## Performance Optimization

### Frontend
- **Code Splitting**: Vite's automatic chunk splitting
- **Tree Shaking**: Removes unused code
- **Minification**: Production builds are minified
- **CSS Purging**: Tailwind removes unused styles

### Backend
- **Rust**: Compiled to native code, extremely fast
- **Small Binary**: Only includes what you use
- **Async/Await**: Non-blocking operations

## Future Enhancements

### Planned Features
1. **State Management**: Redux/Zustand for complex state
2. **Routing**: React Router for multi-page navigation
3. **Database**: SQLite integration for data persistence
4. **Auto-Updates**: Tauri's updater for seamless updates
5. **Analytics**: Optional usage tracking
6. **Themes**: Light/dark mode switcher
7. **Localization**: Multi-language support

### Scalability
- Modular component structure
- Shared utilities and hooks
- Type-safe API layer
- Comprehensive testing
- CI/CD pipeline

## Resources

### Documentation
- [Tauri Docs](https://tauri.app/)
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MUI Documentation](https://mui.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vitest Guide](https://vitest.dev/)

### Community
- [Tauri Discord](https://discord.com/invite/tauri)
- [React Community](https://react.dev/community)
- [Rust Forum](https://users.rust-lang.org/)

## Conclusion

This architecture provides a solid foundation for a modern, cross-platform desktop application with excellent performance, security, and developer experience. The combination of Tauri, React, and modern tooling enables rapid development while maintaining high code quality and user experience.
