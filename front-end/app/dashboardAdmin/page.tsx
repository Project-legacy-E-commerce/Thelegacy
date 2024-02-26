"use client"
import { Box, Typography, Paper } from '@mui/material';
import PermanentDrawerLeft from '@/app/dashboardAdmin/Sidebar';
import Line from "@/app/dashboardAdmin/Charts/line";
import Footer from '@/app/dashboardAdmin/FooterAdmin';
import Stats from "@/app/dashboardAdmin/Charts/chart";
import StackBars from "@/app/dashboardAdmin/Charts/bars";
import WelcomePage from './welcome';
import BasicSparkLine from '@/app/dashboardAdmin/Charts/statt'
export default function main() {
    return (
        <body>
        <main style={{ backgroundColor: "#EEEF8", padding: '20px', marginLeft: '150px' }}>
            <WelcomePage />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Paper elevation={3} sx={{ padding: '20px', width: '45%', marginRight: '10px', '&:hover': { transform: 'scale(1.05)' } }}>
                    <Stats />
                </Paper>
                <Paper elevation={3} sx={{ padding: '20px', width: '45%', '&:hover': { transform: 'scale(1.05)' } }}>
                    <StackBars />
                </Paper>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', '&:hover': { transform: 'scale(1.05)' } }}>
                <Paper elevation={3} sx={{ padding: '20px', width: '90%' }}>
                    <Line />
                </Paper>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', '&:hover': { transform: 'scale(1.05)' } }}>
                <Paper elevation={3} sx={{ padding: '20px', width: '90%' }}>
                    <BasicSparkLine />
                </Paper>
            </Box>
            <PermanentDrawerLeft />
            <Footer />
        </main></body>
    );
}