import React, { useState } from 'react';
import { Container, Paper, Tabs, Tab, Box, TextField, Button, Typography, Grid, Alert, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, OAuthProvider } from 'firebase/auth';

const Auth: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setError(null);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleMicrosoftSignIn = async () => {
    const provider = new OAuthProvider('microsoft.com');
    try {
      await signInWithPopup(auth, provider);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {selectedTab === 0 ? 'Sign in' : 'Sign up'}
        </Typography>
        <Tabs value={selectedTab} onChange={handleChange} centered sx={{ mb: 2 }}>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
        <Box component="form" onSubmit={selectedTab === 0 ? handleLogin : handleSignUp} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {selectedTab === 1 && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {selectedTab === 0 ? 'Sign In' : 'Sign Up'}
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography align="center">Or continue with</Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleGoogleSignIn}
              >
                Google
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleMicrosoftSignIn}
              >
                Microsoft
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Auth;
