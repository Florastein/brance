import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useUser } from '../contexts/UserContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar: React.FC = () => {
  const { user, loading } = useUser();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Learning Platform</Link>
        </Typography>
        <Button color="inherit" component={Link} to="/courses">Courses</Button>
        <Button color="inherit" component={Link} to="/assessments">Assessments</Button>
        <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
        <Button color="inherit" component={Link} to="/messaging">Messaging</Button>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : user ? (
          <>
            <Typography style={{ marginRight: '1rem' }}>{user.email}</Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/auth">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
