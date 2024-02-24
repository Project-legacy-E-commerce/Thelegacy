"use client";
import * as React from "react";
import * as MUI from "@mui/material";
import Products from "@/app/seller/Functions/FetchAllProducts";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NavBar from "@/app/seller/UI/NavBar";
import SideBar from "@/app/seller/UI/SideBar";
const drawerWidth = 240;

export default function AllClients() {
  const columns: GridColDef[] = [
    { field: "idproduct", headerName: "id", width: 90 },
    {
      field: "name",
      headerName: "name",
      width: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "category",
      width: 150,
      editable: true,
    },
    {
      field: "rate",
      headerName: "rate",
      type: "number",
      width: 70,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      width: 160,
      editable: true,
    },
    {
      field: "initalprice",
      headerName: "initial price",
      width: 160,
      editable: true,
    },
    {
      field: "currentprice",
      headerName: "current price",
      width: 160,
      editable: true,
    },
    {
      field: "imgurlmain",
      headerName: "main image",
      width: 160,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "quantity",
      width: 160,
      editable: true,
    },
    {
      field: "description",
      headerName: "description",
      width: 160,
      editable: true,
    },
  ];

  return (
    <MUI.Container
      maxWidth={false}
      sx={{ bgcolor: "#EEEFF8", height: 800, width: "100%" }}
    >
      <NavBar />
      <SideBar />
      <MUI.Box sx={{ ml: `${drawerWidth}px`, width: "85%" }}>
        <DataGrid
        sx={{fontSize:"15px", fontWeight:"24px"}}
          getRowId={(row) => row.idproduct}
          rows={Products()}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </MUI.Box>
    </MUI.Container>
  );
}
