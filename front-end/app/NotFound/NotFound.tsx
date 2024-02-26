import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';

// Component with proper typing
export default function NotFoundd ()  {
  return (
    <div>
      
      
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <Typography variant="h1" color="primary">
              404 Not Found
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              Page not found. Here are some helpful links:
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Go back
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ backgroundColor: "red", color: "white" }}>
              Take me home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

