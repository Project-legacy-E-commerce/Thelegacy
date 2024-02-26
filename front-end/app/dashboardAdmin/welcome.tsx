import React from 'react';
import { IconButton,Box,Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const WelcomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh',
        background: '#000',
        color: '#fff',
      }}
    >
      <Typography variant="h4" align="center">
        Welcome Admin, here are your stats for today
      </Typography>
      <IconButton sx={{ color: '#fff', marginTop: '20px' }}>
        <ArrowDownwardIcon  width="24" height="24" />
      </IconButton>
    </Box>
  );
};

export default WelcomePage;