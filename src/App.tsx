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
import { Box, useTheme } from '@mui/material';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url('/src/assets/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: theme.palette.text.primary,
      }}
    >
      <Router>
        <Navbar />
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(0, 0, 0, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            margin: '2rem',
            padding: '2rem',
          }}
        >
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
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
