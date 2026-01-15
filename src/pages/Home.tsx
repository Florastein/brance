import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const services = [
  {
    name: 'Authentication',
    description: 'Manages user identity, registration, login, and access control.',
  },
  {
    name: 'Course Management',
    description: 'Handles the creation, organization, and delivery of educational content.',
  },
  {
    name: 'Assessments',
    description: 'Manages quizzes, assignments, and other forms of assessment.',
  },
  {
    name: 'Analytics',
    description: 'Gathers and analyzes data on user engagement and learning outcomes.',
  },
  {
    name: 'Messaging',
    description: 'Facilitates real-time communication between users.',
  },
];

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome to the Modular Learning Platform
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        A microservice-ready application for a modern learning experience.
      </Typography>
      <Grid container spacing={4} style={{ marginTop: '2rem' }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.name}>
            <Paper elevation={3} style={{ padding: '2rem', height: '100%' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                {service.name}
              </Typography>
              <Typography>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;