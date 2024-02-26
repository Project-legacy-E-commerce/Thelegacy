"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContactEmergencyTwoToneIcon from '@mui/icons-material/ContactEmergencyTwoTone';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" sx={{ width: `calc(100% - ${drawerWidth}px)`, bgcolor: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div" onClick={() => router.push('/dashboardAdmin')} sx={{ color: 'white' }}>
            DashBoard Admin
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label="Search..."
              size="small"
              margin="none"
              style={{ width: 120, color: 'white' }}
              sx={{
                '& .MuiInputBase-root': {
                  borderRadius: 4,
                  color: 'white',
                },
              }}
            />
            <IconButton
              size="small"
              sx={{
                ml: 1,
                bgcolor: 'transparent',
                transition: 'background-color 0.3s',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <SearchIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List sx={{}}>
          <ListItem key="All users">
            <ListItemButton onClick={() => router.push('/dashboardAdmin/Allusers')}>
              <ListItemIcon>
                <Groups2RoundedIcon />
              </ListItemIcon>
              <ListItemText primary="All users" />
            </ListItemButton>
          </ListItem>

          <ListItem key="All Clients" disablePadding>
            <ListItemButton onClick={() => router.push('/dashboardAdmin/Allbuyers')}>
              <ListItemIcon>
                <ContactEmergencyTwoToneIcon sx={{ backgroundColor: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="All Clients" />
            </ListItemButton>
          </ListItem>

          <ListItem key="All Sellers" disablePadding>
            <ListItemButton onClick={() => router.push('/dashboardAdmin/Allsellers')}>
              <ListItemIcon>
                <MonetizationOnIcon sx={{ backgroundColor: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="All Sellers" />
            </ListItemButton>
          </ListItem>

          <ListItem key="All Products" disablePadding>
            <ListItemButton onClick={() => router.push('/dashboardAdmin/Allproducts')}>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="All Products" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}