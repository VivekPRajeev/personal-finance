import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Personal Finance/i)).toBeInTheDocument();
  });

  it('renders the greeting form', () => {
    render(<App />);
    expect(screen.getByLabelText(/Enter your name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Greet/i })).toBeInTheDocument();
  });

  it('displays features list', () => {
    render(<App />);
    expect(screen.getByText(/Cross-platform desktop app/i)).toBeInTheDocument();
  });
});
