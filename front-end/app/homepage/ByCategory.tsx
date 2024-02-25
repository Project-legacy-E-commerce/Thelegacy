import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import WatchIcon from "@mui/icons-material/Watch";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { motion } from "framer-motion";

export default function ByCategory() {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box>
        <div
          style={{
            height: "40px",
            width: "20px",
            borderRadius: "4px",
            backgroundColor: "rgba(219, 68, 68, 1)",
          }}
        >
          <Typography
            sx={{
              marginLeft: "30px",
              fontFamily: "Poppins",
              color: "rgba(219, 68, 68, 1)",
              paddingTop: "10px",
              fontWeight: "bold",
            }}
          >
            Categories
          </Typography>
        </div>
        <Typography
          fontSize={40}
          fontFamily={"Inter"}
          letterSpacing={"4%"}
          textColor={"common.black"}
        >
          Browse By Category
        </Typography>
      </Box>
      <Box
        marginTop={5}
        maxWidth={"100%"}
        sx={{ display: "inline-flex", gap: "15px" }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "black",
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ":hover":{backgroundColor:"rgba(219, 68, 68, 1)", color:"white"}
          }}
        >
          <motion.div whileHover={{ scale: 1.4 }}>
            <PhoneIphoneIcon sx={{ fontSize: "50px", opacity: "0.8" }} />
            <Typography>Phones</Typography>
          </motion.div>
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ":hover":{backgroundColor:"rgba(219, 68, 68, 1)", color:"white"}
          }}
        >
          <motion.div whileHover={{ scale: 1.4 }}>
            <LaptopIcon sx={{ fontSize: "50px", opacity: "0.8" }} />
            <Typography>Computers</Typography>
          </motion.div>
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ":hover":{backgroundColor:"rgba(219, 68, 68, 1)", color:"white"}
          }}
        >
          <motion.div whileHover={{ scale: 1.4 }}>
            <WatchIcon sx={{ fontSize: "50px", opacity: "0.8" }} />
            <Typography>SmartWatch</Typography>
          </motion.div>
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ":hover":{backgroundColor:"rgba(219, 68, 68, 1)", color:"white"}
          }}
        >
          <motion.div whileHover={{ scale: 1.4 }}>
            <PhotoCameraIcon sx={{ fontSize: "50px", opacity: "0.8" }} />
            <Typography>Camera</Typography>
          </motion.div>
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ":hover":{backgroundColor:"rgba(219, 68, 68, 1)", color:"white"}
          }}
        >
          <motion.div whileHover={{ scale: 1.4 }}>
            <HeadphonesIcon sx={{ fontSize: "50px", opacity: "0.8" }} />
            <Typography>HeadPhones</Typography>
          </motion.div>
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ":hover":{backgroundColor:"rgba(219, 68, 68, 1)", color:"white"}
          }}
        >
          <motion.div whileHover={{ scale: 1.4 }}>
            <VideogameAssetIcon sx={{ fontSize: "50px", opacity: "0.8" }} />
            <Typography>Gaming</Typography>
          </motion.div>
        </Button>
      </Box>
    </Container>
  );
}
