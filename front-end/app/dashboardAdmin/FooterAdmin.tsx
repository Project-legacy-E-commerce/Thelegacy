import * as React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';

export default function FooterAdmin() {
  return (
    <Box sx={{ backgroundColor: "black", padding: '4rem 0' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span className="icon">🚀</span>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem',color:"white" }}>
           Exclusive
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '0rem' }}>
          <Link href="#" sx={{ margin: '0 1rem', color: 'white', '&:hover': { color: 'primary.main' } }}>
            Home
          </Link>
          <Link href="#" sx={{ margin: '0 1rem', color: 'white', '&:hover': { color: 'primary.main' } }}>
            About
          </Link>
          <Link href="#" sx={{ margin: '0 1rem', color: 'white', '&:hover': { color: 'primary.main' } }}>
            Contact
          </Link>
        </Box>
        <Typography variant="body2" sx={{ color: 'White' }}>
          ©  Enjoy your Day Dear Admin.
        </Typography>
      </Container>
    </Box>
  );
}
