"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField, Button, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import { Refresh } from "@mui/icons-material";

//  function CreateProduct({params}:{params:{id:string}}){

// const rows = [
//   createProduct(
//     "https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fv8yNl7a72dKJcxkv3E4oQMJ9GnWvESN1kqOHIs4y9kQtnOFAbwNU0FtPMvF7xjSw9YsIpgyUO62OxO7iKNlE9AlfW3O05wdmFzSAX9PlsPQ4YlNNnAUc5WivLWmG0W7JdiiQ26NNkb-RDEadMd~GrvQfxxvHF-gEIInnPZ9zA7kUIjqdH~icFiyceBLSDbaRGrzlCqO37A8ySSFYWMmln4lEJ8M5-26gzqqDihXM2usxL3KOCFSbROnKNW05-1K~HEf9eM8iNYExLBUh6uDQcUS2SeuXPbZ2Xjk9HnsroLWV8diHHoJJAqloXtYbl6E68-vXX1b9LJLwoXZUbbPog__",
//     "LCD Monitor",
//     650,
//     1,
//     650
//   ),
//   createProduct(
//     "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh5Wnmwu6sFIjdrACwKPvFLd2gBn84a40fOGqGBvO5pz58neD6zejyfocoZZlxfRlJfy7DRs1kPDy2GEVcTdC06XMtOQbiqeth0A4TrbyO~xQTPoEE9iNMVcB8bgke3TiMmw8vF8Q6PIvkxiRG-7Tfz1~BzupKzpIWZdY5wFRm5Oy9NzHlity37Y~8RJ1Cvb0YL9LSS1Zv00PJtoGqgdU-DvqQECeOOmLGFNb7UY~idai1ijh5QYcMuxuUvF1NENEQWx78Kl9I9laC4dONVS7ru1nfqWkoWwXJZJKZjGNvSCx8Nwbmy10FT-CtSNIE9VeB9chwoACMuE2Kc8Hp0ISw__",
//     "LCD Monitor",
//     650,
//     2,
//     650
//   ),
// ];

export default function ProductsList() {
  const [data, setData] = useState<any>([]);
  const [subtotal, setSubtotal] = useState<any>(null);
  const [refresh, setRefresh] = useState(false);
  type Product = {
    image: string;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
  };

  const calcSum = (data: any) => {
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].sum == null) {
        sum += data[i].product.quantity * data[i].product.initalprice;
      } else {
        sum += total(data[i].sum, data[i].product.initalprice);
      }
    }

    return sum;
  };

  const total = (quantity: number, price: any) => {
    console.log(quantity, price);
    return quantity * price;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/panier/getAllcarts/${1}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: any = await response.json(); // Assuming response data is JSON
      setData(data);
      // setSubtotal(sum);

      setSubtotal(calcSum(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("nnnn");
    setSubtotal(calcSum(data));
  }, [refresh]);

  const del = (product: any) => {
    axios
      .delete(`http://localhost:3000/panier/deletecart/${1}/${product}`)
      .then((res) => {
        console.log(res);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const style = {
    p: 0,
    width: "100%",
    maxWidth: 360,
    borderRadius: 2,
    border: "2px solid #000",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  return (
    <>
      <TableContainer
        className="cart-table"
        style={{ margin: "70px auto 0 auto", border: "none", width: "1300px" }}
        component={Paper}
      >
        <Table style={{ width: "1300px" }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ fontWeight: "bold" }}>
              <TableCell style={{ fontWeight: "bold", padding: "35px" }}>
                Product
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", padding: "35px" }}
                align="center"
              >
                Price
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", padding: "35px" }}
                align="center"
              >
                Quantity
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", padding: "35px" }}
                align="center"
              >
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, i: number) => (
              <TableRow
                style={{ padding: "20px" }}
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{
                    padding: "35px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                  component="th"
                  scope="row"
                >
                  <img style={{ width: "50px" }} src={row.product.imgurlmain} />
                  {row.product.name}
                </TableCell>
                <TableCell style={{ padding: "35px" }} align="center">
                  ${row.product.initalprice}
                </TableCell>
                <TableCell style={{ padding: "35px" }} align="center">
                  <input
                    className="qt-input"
                    defaultValue={row.product.quantity}
                    type="number"
                    value={row.sum}
                    onChange={(e) => {
                      const quantityP = parseInt(e.target.value);
                      setData((myData: any) => {
                        const newData: any = [...myData];
                        newData[i].sum = isNaN(quantityP) ? 1 : quantityP;
                        console.log("first", calcSum(newData));
                        setSubtotal(calcSum(newData));
                        return newData;
                      });
                    }}
                    min="1"
                  />
                </TableCell>

                <TableCell style={{ padding: "35px" }} align="center">
                  $
                  {row.sum === null
                    ? row.product.initalprice * row.product.quantity
                    : total(row.sum, row.product.initalprice)}
                </TableCell>
                <TableCell style={{ padding: "35px" }} align="center">
                  <DeleteOutlinedIcon 
                    onClick={() => {
                      del(row.product.idproduct);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ margin: "70px auto 0 auto", border: "none", width: "1300px" }}
        className="bottom-section"
      >
        <div>
          <TextField
            variant="outlined"
            style={{
              width: "270px",
              height: "42px",
              border: "2px solid rgba(0,0,0,0.8)",
            }}
            type="text"
            placeholder="Coupon Code"
          />
          <Button
            variant="contained"
            style={{
              width: "35ch",
              height: "42px",
              backgroundColor: "#f44336",
              marginLeft: "30px",
            }}
          >
            Apply Coupon
          </Button>
        </div>
        <div
          style={{
            float: "right",
            marginRight: 56,
            width: "550px",
            border: "1px solid rgba(0,0,0,0.8)",
            borderRadius: "5px",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              padding: 4,
              marginTop: "10px",
              boxShadow: "none",
              height: "400px",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{ ml: 5, mt: 2, fontSize: "20px", marginRight: "15px" }}
            >
              Cart Total
            </Typography>
            <div
              style={{
                marginTop: "20px",
                height: "400px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 7px",
                }}
              >
                <div>Subtotal</div>
                <div>{subtotal}</div>
              </div>
              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 7px",
                }}
              >
                <div>Shipping:</div>
                <div>Free </div>
              </div>
              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 7px",
                }}
              >
                <div>Total:</div>
                <div>{subtotal}</div>
              </div>
              <hr />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#f44336",
                  color: "white",
                  width: "250px",
                  height: "55px",
                  margin: "30px 0 0 125px",
                }}
              >
                Proceed to checkout
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
}
