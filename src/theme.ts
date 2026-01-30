import { createTheme } from '@mui/material/styles';

// Light Theme: White and a shade of blue
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007bff', // Blue for text and borders
    },
    secondary: {
      main: '#0056b3', // Darker blue for hover states
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f8f9fa',   // Off-white for paper elements
    },
    text: {
      primary: '#212529', // Dark gray for primary text
      secondary: '#495057', // Lighter gray for secondary text
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
      main: '#007bff', // Blue for text and borders
    },
    secondary: {
      main: '#0056b3', // Darker blue for hover states
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Slightly lighter dark for paper elements
    },
    text: {
      primary: '#ffffff', // White for primary text
      secondary: '#adb5bd', // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
