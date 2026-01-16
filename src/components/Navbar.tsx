import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { useUser } from '../contexts/UserContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import SchoolIcon from '@mui/icons-material/School';
import { useThemeContext } from '../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar: React.FC = () => {
  const { user, loading } = useUser();
  const { mode, toggleTheme } = useThemeContext();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          component={RouterLink}
          to="/"
          sx={{ mr: 2 }}
        >
          <SchoolIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Learnify
          </RouterLink>
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/courses">Courses</Button>
          <Button color="inherit" component={RouterLink} to="/course-builder">Create</Button>
          <Button color="inherit" component={RouterLink} to="/assessments">Assessments</Button>
          <Button color="inherit" component={RouterLink} to="/analytics">Analytics</Button>
          <Button color="inherit" component={RouterLink} to="/messaging">Messaging</Button>
        </Box>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit" aria-label="toggle theme">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {loading ? (
          <Typography sx={{ ml: 2 }}>Loading...</Typography>
        ) : user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Typography sx={{ mr: 2 }}>{user.email}</Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Box>
        ) : (
          <Button color="inherit" component={RouterLink} to="/auth" sx={{ ml: 2 }}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
