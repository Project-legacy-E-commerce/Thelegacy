"use client";
import React, { FC, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export default function AboutUss() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
  };
  const titleVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1.5, delay: 2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <Container>
        <motion.div
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
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
            Our Story
          </Typography>
        </motion.div>
        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <img
            src="https://shorturl.at/dqJN2"
            height={"420px"}
            width={"450px"}
            style={{
              border: "2px solid #333", 
              borderRadius: "8px", 
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
            }}
          />
          <Paper
            elevation={8}
            sx={{ padding: 2, borderRadius: 8, backgroundColor: "#f0f0f0" }}
          >
            <motion.div
              variants={titleVariants}
              initial="initial"
              animate="animate"
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "Arial", color: "#333" }}
              >
                {" "}
                launced in 2015 ,Exclusive is North Africa premier online
                shoping market place with an active presence in tunisia
                Supported by wide range of tailored marketing ,data and service
                solutions Exclusive has 10,500 sallers and servers 3 millions
                customers across the region launced in 2015 ,Exclusive is North
                Africa premier online shoping market place with an active
                presence in tunisia Supported by wide range of tailored
                marketing ,data and service solutions Exclusive has 10,500
                sallers and servers 3 millions customers across the
              </Typography>
            </motion.div>
          </Paper>
        </Box>
        <motion.div
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
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
              letterSpacing: "1px", 
            }}
          >
            OUR TEAM
          </Typography>
        </motion.div>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Card
            component={motion.div}
            variants={cardVariants}
            whileHover="hover"
            sx={{
              maxWidth: 250,
              boxShadow: "20px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: 12,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://res.cloudinary.com/ali22/image/upload/v1699970852/koss/nmlsq55itdp8lnatb7dn.jpg"
              alt="Team Member"
              sx={{
                borderTopLeftRadius: 12, 
                borderTopRightRadius: 12, 
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <motion.div
                variants={titleVariants}
                initial="initial"
                animate="animate"
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600, color: "#333" }}
                >
                  Aziz Derouiche
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Scrum Master
                </Typography>
              </motion.div>
            </CardContent>
          </Card>

          <Card
            component={motion.div}
            variants={cardVariants}
            whileHover="hover"
            sx={{
              maxWidth: 250,
              boxShadow: "20px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: 12,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://res.cloudinary.com/ali22/image/upload/v1699982243/koss/cypet04ltf9o6kmqox8f.png"
              alt="Team Member"
              sx={{
                borderTopLeftRadius: 12, 
                borderTopRightRadius: 12, 
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <motion.div
                variants={titleVariants}
                initial="initial"
                animate="animate"
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Slah Ben Kacem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Owner
                </Typography>
              </motion.div>
            </CardContent>
          </Card>
          <Card
            component={motion.div}
            variants={cardVariants}
            whileHover="hover"
            sx={{
              maxWidth: 250,
              boxShadow: "20px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: 12,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://res.cloudinary.com/ali22/image/upload/v1698053641/koss/sj7mttwzgziqfldyhfw6.png"
              alt="Team Member"
              sx={{
                borderTopLeftRadius: 12, 
                borderTopRightRadius: 12, 
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <motion.div
                variants={titleVariants}
                initial="initial"
                animate="animate"
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Hassen Barred
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Developer
                </Typography>
              </motion.div>
            </CardContent>
          </Card>
          <Card
            component={motion.div}
            variants={cardVariants}
            whileHover="hover"
            sx={{
              maxWidth: 250,
              boxShadow: "20px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: 12,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://res.cloudinary.com/ali22/image/upload/v1698054442/koss/sr8bkpgm8tjesmxjytiy.jpg"
              alt="Team Member"
              sx={{
                borderTopLeftRadius: 12, 
                borderTopRightRadius: 12, 
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <motion.div
                variants={titleVariants}
                initial="initial"
                animate="animate"
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Mohamed Matri
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Developer
                </Typography>
              </motion.div>
            </CardContent>
          </Card>
          <Card
            component={motion.div}
            variants={cardVariants}
            whileHover="hover"
            sx={{
              maxWidth: 250,
              boxShadow: "20px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: 12,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://res.cloudinary.com/ali22/image/upload/v1698066928/koss/egpp87tnjwuue9qc1mc9.png"
              alt="Team Member"
              sx={{
                borderTopLeftRadius: 12, 
                borderTopRightRadius: 12, 
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <motion.div
                variants={titleVariants}
                initial="initial"
                animate="animate"
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Eya Jouini
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Developer
                </Typography>
              </motion.div>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </motion.div>
  );
}
