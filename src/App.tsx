import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { invoke } from '@tauri-apps/api/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="min-h-screen bg-gray-50">
        <AppBar position="static">
          <Toolbar>
            <AccountBalanceIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div">
              Personal Finance Manager
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Box className="text-center mb-8">
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to Personal Finance
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              Built with Tauri + React + MUI + Tailwind CSS
            </Typography>
          </Box>

          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Greeting Demo
              </Typography>
              <Box
                component="form"
                onSubmit={e => {
                  e.preventDefault();
                  greet();
                }}
                sx={{ mt: 2 }}
              >
                <TextField
                  fullWidth
                  label="Enter your name"
                  variant="outlined"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Greet
                </Button>
              </Box>
              {greetMsg && (
                <Box className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <Typography variant="body1" className="text-center font-semibold">
                    {greetMsg}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          <Box className="mt-6 p-4 bg-white rounded-lg shadow">
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cross-platform desktop app (Windows, Linux, macOS)</li>
              <li>React with TypeScript</li>
              <li>Material-UI components</li>
              <li>Tailwind CSS utility classes</li>
              <li>ESLint + Prettier configuration</li>
              <li>Vitest for testing</li>
              <li>Docker support for dev and prod</li>
            </ul>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
