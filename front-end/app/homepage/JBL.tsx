import React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";

export default function JBL () {
  return (
    <Container
      sx={{
        backgroundColor: "black",
        marginTop: "100px",
        width: "100%",
        height: "450px",
        zIndex: -1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        width={"40%"}
        display={"flex"}
        flexDirection={"column"}
        marginTop={"50px"}
        gap={"20px"}
        paddingLeft={"30px"}
      >
        <Typography textColor={"rgba(0, 255, 102, 1)"}>Categories</Typography>
        <Typography textColor="white" fontSize={"50px"}>
          Enhance Your Music Experience
        </Typography>
        <Box display={"inline-flex"} gap={"20px"}>
          <div
            style={{
              color: "black",
              fontSize: "42px",
              width: "55px",
              height: "55px",
              backgroundColor: "white",
              borderRadius: "30cap",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
            }}
          >
            <h5 style={{ height: "15px" }}>23</h5>
            <div style={{ fontSize: "11px", fontFamily: "Poppins" }}>hours</div>
          </div>
          <div
            style={{
              color: "black",
              fontSize: "42px",
              width: "55px",
              height: "55px",
              backgroundColor: "white",
              borderRadius: "30cap",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
            }}
          >
            <h5 style={{ height: "15px" }}>05</h5>
            <div style={{ fontSize: "11px", fontFamily: "Poppins" }}>days</div>
          </div>
          <div
            style={{
              color: "black",
              fontSize: "42px",
              width: "55px",
              height: "55px",
              backgroundColor: "white",
              borderRadius: "30cap",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
            }}
          >
            <h5 style={{ height: "15px" }}>59</h5>
            <div style={{ fontSize: "11px", fontFamily: "Poppins" }}>
              Minutes
            </div>
          </div>
          <div
            style={{
              color: "black",
              fontSize: "42px",
              width: "55px",
              height: "55px",
              backgroundColor: "white",
              borderRadius: "30cap",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
            }}
          >
            <h5 style={{ height: "15px" }}>35</h5>
            <div style={{ fontSize: "11px", fontFamily: "Poppins" }}>
              Seconds
            </div>
          </div>
        </Box>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            width: "150px",
            height: "50px",
          }}
        >
          Buy Now
        </Button>
      </Box>
      <Box zIndex={1}>
        <img
          src="https://res.cloudinary.com/hzxyensd5/image/upload/v1708132919/gqpvg7grzbauqw2twxjz.png"
          alt="JBL"
          height={"100%"}
          width={"100%"}
        />
      </Box>
    </Container>
  );
};