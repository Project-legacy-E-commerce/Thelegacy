import React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

export default function Services () {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "100px",
        width: "100%",
        height: "170px",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px",
          gap: "24px",
          width: "260px",
          height: "170px",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "rgba(47, 46, 48, 1)",
            borderRadius: "10cap",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            order: "0",
          }}
        >
          <AirportShuttleIcon
            sx={{ fontSize: "50px", color: "white" }}
          ></AirportShuttleIcon>
        </div>
        <Typography fontSize={20} fontWeight={650}>
          FREE AND FAST DELIVERY
        </Typography>
        <Typography>Free delivery for all orders over $140</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px",
          gap: "24px",
          width: "260px",
          height: "170px",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "rgba(47, 46, 48, 1)",
            borderRadius: "10cap",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            order: "0",
          }}
        >
          <HeadsetMicIcon
            sx={{ fontSize: "50px", color: "white" }}
          ></HeadsetMicIcon>
        </div>
        <Typography fontSize={20} fontWeight={650}>
          24/7 CUSTOMER SERVICE
        </Typography>
        <Typography>Friendly 24/7 customer support</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px",
          gap: "24px",
          width: "260px",
          height: "170px",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "rgba(47, 46, 48, 1)",
            borderRadius: "10cap",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            order: "0",
          }}
        >
          <VerifiedUserOutlinedIcon
            sx={{ fontSize: "50px", color: "white" }}
          ></VerifiedUserOutlinedIcon>
        </div>
        <Typography fontSize={20} fontWeight={650} sx={{ textAlign: "center" }}>
          MONEY BACK GUARANTEE
        </Typography>
        <Typography>We reurn money within 30 days</Typography>
      </Box>
    </Container>
  );
}