import { createTheme } from '@mui/material/styles';

// Light Theme: White and a shade of blue
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // A standard shade of blue
    },
    secondary: {
      main: '#42a5f5', // A lighter, complementary blue
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// Dark Theme: A complementary blue palette
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // A light blue that stands out on a dark background
    },
    secondary: {
      main: '#64b5f6', // Another complementary blue
    },
    background: {
      default: 'rgba(18, 18, 18, 0.5)',
      paper: 'rgba(18, 18, 18, 0.7)',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
