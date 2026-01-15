import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Learning Platform</Link>
        </Typography>
        <Button color="inherit" component={Link} to="/auth">Authentication</Button>
        <Button color="inherit" component={Link} to="/courses">Courses</Button>
        <Button color="inherit" component={Link} to="/assessments">Assessments</Button>
        <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
        <Button color="inherit" component={Link} to="/messaging">Messaging</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;