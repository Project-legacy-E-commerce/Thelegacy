"use client";
import * as React from "react";
import * as MUI from "@mui/material";
import Numbers from "@/app/seller/UI/Numbers";
import Chart from "@/app/seller/UI/Charts";
const drawerWidth = 280;

export default function Seller() {
  return (
    <MUI.Box >
      <MUI.Box
        sx={{
          ml: `${drawerWidth}px`,
          display: "flex",
          flexDirection:"column",
          height:"fit-content" 
        }}
      >
        <Numbers />
        <Chart />
      </MUI.Box>
    </MUI.Box>
  );
}
