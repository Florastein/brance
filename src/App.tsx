import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Courses from './pages/Courses';
import Assessments from './pages/Assessments';
import Analytics from './pages/Analytics';
import Messaging from './pages/Messaging';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messaging" element={<Messaging />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;