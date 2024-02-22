"use client";
import * as React from "react";
import * as MUI from "@mui/material";
import NavBar from "@/app/seller/UI/NavBar";
import SideBar from "@/app/seller/UI/SideBar";
import Numbers from "@/app/seller/UI/Numbers";
import Chart from "@/app/seller/UI/Charts";
import Products from "@/app/seller/Functions/FetchAllProducts";
const drawerWidth = 280;

export default function Seller() {
  return (
    <MUI.Box sx={{ bgcolor: "#EEEFF8"}}>
      <NavBar />
      <MUI.CssBaseline />
      <SideBar />
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
