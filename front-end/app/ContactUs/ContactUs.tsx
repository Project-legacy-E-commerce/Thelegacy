"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  Link,
  Avatar,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SupportIcon from "@mui/icons-material/Support";
import BusinessIcon from "@mui/icons-material/Business";
import BugReportIcon from "@mui/icons-material/BugReport";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

export default function ContactUss() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box sx={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              marginRight: "800px",
              fontSize: "3rem",
              marginTop: "40px",
              marginBottom: "20px",
              fontFamily: "system-ui",
              fontWeight: 700,
              color: "#333",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Contact Us
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Box
                  sx={{
                    padding: 4,
                    borderRadius: 4,
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="h5" mb={3}>
                    Send Us a Message
                  </Typography>
                  <Stack spacing={2}>
                    <TextField label="Name" variant="outlined" fullWidth />
                    <TextField label="Email" variant="outlined" fullWidth />
                    <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      disabled
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Typography variant="h5" mb={3}>
                  Contact Information
                </Typography>
                <Stack spacing={2}>
                  <Link
                    href="#"
                    underline="hover"
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar sx={{ mr: 2 }}>
                      <ContactMailIcon />
                    </Avatar>
                    info@example.com
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar sx={{ mr: 2 }}>
                      <SupportIcon />
                    </Avatar>
                    support@example.com
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar sx={{ mr: 2 }}>
                      <BusinessIcon />
                    </Avatar>
                    sales@example.com
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar sx={{ mr: 2 }}>
                      <BugReportIcon />
                    </Avatar>
                    bugs@example.com
                  </Link>
                </Stack>
                <Divider sx={{ my: 4 }} />
                <Typography variant="h5" mb={3}>
                  For any other inquiries, feel free to reach out to us using
                  the form above.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}
