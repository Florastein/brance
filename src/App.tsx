import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Courses from './pages/Courses';
import Assessments from './pages/Assessments';
import Analytics from './pages/Analytics';
import Messaging from './pages/Messaging';
import CourseBuilder from './pages/CourseBuilder';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { UserProvider } from './contexts/UserContext';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: 'rgba(0, 0, 0, 0.5)',
      paper: 'rgba(0, 0, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Router>
          <Navbar />
          <Box sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            margin: '2rem',
            padding: '2rem'
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/assessments" element={<Assessments />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/course-builder" element={<CourseBuilder />} />
            </Routes>
          </Box>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
