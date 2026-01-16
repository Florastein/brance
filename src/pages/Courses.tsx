import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase';

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const q = query(collection(firestore, 'courses'), where('published', '==', true));
      const querySnapshot = await getDocs(q);
      const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
      setCourses(coursesData);
    };

    fetchCourses();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={4}>
        {courses.map(course => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={course.thumbnailUrl}
                alt={course.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Course</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
