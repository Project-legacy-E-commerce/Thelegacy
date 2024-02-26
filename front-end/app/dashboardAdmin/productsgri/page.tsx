"use client";
import * as React from "react";
import * as MUI from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ProductContext from "@/app/dashboardAdmin/productsgri/usecont";
import axios from "axios";
import Products from "../Allproducts/page";
const drawerWidth = 240;
type ProductData = {
  id: number;
  name: string;
  initalprice: number;
  imgurlmain: string;
  description: string;
  category: string;
  quantity: string;
};
export default function AllProducts() {
  const [open, setOpen] = React.useState(false);
  const[selected,setRowSelectionModel]=React.useState("")
  const [product, setProduct] = React.useState<ProductData[]>([]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (e: any) => {
    setProduct(e.row);
    setOpen(true);
  };

  const handleDelete = () => {
    console.log(selected);
    axios
      .delete(`http://localhost:3000/saler/deleteprod/${selected[0]}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

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
      <MUI.Box sx={{ ml: `${drawerWidth}px`, width: "85%" }}>
        <DataGrid
          sx={{ fontSize: "15px", fontWeight: "24px" }}
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
          onRowDoubleClick={handleOpen}
          onRowSelectionModelChange={(newRowSelectionModel:any) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
        />
        <MUI.Button onClick={()=>handleDelete()}>delete selected</MUI.Button>
      </MUI.Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      ><MUI.Button onClick={()=>handleClose()}>X</MUI.Button>
        <ProductContext.Provider value={product}>
        </ProductContext.Provider>
      </Backdrop>
    </MUI.Container>
  );
}