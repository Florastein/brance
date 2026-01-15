import React, { useState } from 'react';
import { Container, Paper, Tabs, Tab, Box, TextField, Button, Typography, Grid } from '@mui/material';

const Auth: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={selectedTab} index={0}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Login
          </Typography>
          <form>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              Login
            </Button>
          </form>
          <Box my={2}>
            <Typography align="center">Or</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Button
                variant="outlined"
                fullWidth
                >
                Google
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                variant="outlined"
                fullWidth
                >
                Microsoft
                </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Sign Up
          </Typography>
          <form>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              Sign Up
            </Button>
          </form>
        </TabPanel>
      </Paper>
    </Container>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default Auth;
