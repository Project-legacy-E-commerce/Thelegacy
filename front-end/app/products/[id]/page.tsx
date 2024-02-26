"use client";
import * as React from "react";
import Link from "next/link";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { Breadcrumbs, ButtonGroup, Input, Radio } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CachedIcon from "@mui/icons-material/Cached";
import SvgIcon from "@mui/material/SvgIcon";
import Icon from "@mui/material/Icon";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OneViewRelated from "@/components/OneViewRelated";

import { motion } from "framer-motion";

const Page = ({ params }: any) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [number, setNumber] = React.useState(1);
  const [quantity, setQuantity] = React.useState(0);
  const [product, setProduct] = useState<any>(null);
  const [products, setProducts] = useState<any>(null);

  const [image, setimage] = React.useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const { id } = params;
  // const id = "6";

  useEffect(() => {
    // Fetch product details using the ID
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  const fetchAllProducts = async (productCat: string, id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/saler/productcategory/${productCat}`
      ); // Assuming you have an API endpoint to fetch product details
      const data = await response.json();
      console.log("all products", data);
      const filtredData = data.filter((e: any) => e.idproduct !== id);
      console.log({ filtredData });
      setProducts(filtredData);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const fetchProductDetails = async (productId: any) => {
    try {
      const response = await fetch(
        `http://localhost:3000/saler/getproduct/${productId}`
      ); // Assuming you have an API endpoint to fetch product details
      const data = await response.json();
      console.log(data);
      setProduct(data[0]);
      setimage(data[0].imgurlmain);
      fetchAllProducts(data[0].category, data[0].idproduct);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!product) {
    return <div>Loading ...</div>;
  }

  // Render product details
  return (
    <>
      <Header />
      <Breadcrumbs style={{ margin: "50px 0 0 40px" }} aria-label="breadcrumb">
        <Link style={{ textDecoration: "none", color: "#000" }} href="/">
          Home
        </Link>
        <Typography>Cart</Typography>
      </Breadcrumbs>
      <div>
        <div
          style={{
            paddingLeft: "120px",
            paddingRight: "120px",
            paddingTop: "50px",
            width: "100%",
          }}
        >
          <Container sx={{ marginTop: "100px" }}>
            <Box
              sx={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "0px",
                gap: "30px",
                width: "1170px",
                height: "600px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "170px",
                  height: "600px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <Button
                  onClick={() => setimage(product?.imgproducts[0]?.image1)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "170px",
                    height: "138px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <img
                    style={{ zIndex: 1 }}
                    width={135}
                    src={product?.imgproducts[0]?.image1}
                    alt=""
                  />
                </Button>
                <Button
                  onClick={() => setimage(product?.imgproducts[0]?.image2)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "170px",
                    height: "138px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <img
                    style={{ zIndex: 1 }}
                    width={135}
                    src={product?.imgproducts[0]?.image2}
                    alt=""
                  />
                </Button>
                <Button
                  onClick={() => setimage(product?.imgproducts[0]?.image3)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "170px",
                    height: "138px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <img
                    style={{ zIndex: 1 }}
                    width={135}
                    src={product?.imgproducts[0]?.image3}
                    alt=""
                  />
                </Button>
                <Button
                  onClick={() => setimage(product?.imgproducts[0]?.image4)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "170px",
                    height: "138px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <img
                    style={{ zIndex: 1 }}
                    width={135}
                    src={product?.imgproducts[0]?.image4}
                    alt=""
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "500px",
                  height: "600px",
                  gap: "20px",
                  order: 1,
                  flexGrow: 0,
                }}
              >
                {" "}
                <img width={"500px"} height={"600px"} src={image} alt="" />
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "399px",
                  height: "600px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  order: 2,
                  flexGrow: 0,
                }}
              >
                <Typography
                  sx={{ order: 0, fontWeight: "600", fontSize: "24px" }}
                >
                  {product?.name}
                </Typography>

                <Stack
                  spacing={1}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignContent: "center",
                  }}
                >
                  <Rating
                    name="half-rating"
                    defaultValue={product?.rate}
                    precision={0.5}
                  />

                  <span style={{ marginTop: "5px", color: "gray" }}>
                    ({product?.rate} Reviews)
                  </span>
                  <Divider orientation="vertical" flexItem />
                  <span style={{ marginTop: "5px" }}>
                    {product?.quantity ? (
                      <Typography sx={{ color: "green" }}>in Stock</Typography>
                    ) : (
                      <Typography sx={{ color: "red" }}>
                        Out Of Stock
                      </Typography>
                    )}
                  </span>
                </Stack>
                <Typography fontWeight={450} fontSize={"24px"}>
                  ${product?.initalprice}
                </Typography>
                <Typography fontWeight={450} fontSize={"14px"}>
                  {product?.description}
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "0px",
                    gap: "30px",
                    width: "155px",
                    height: "20px",
                  }}
                >
                  <Typography>Colours:</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      marginTop: "0px",
                      width: "155px",
                      height: "15px",
                      gap: "5px",
                    }}
                  >
                    {product?.colorproducts.map((item: any, key: number) => (
                      <Radio
                        key={key}
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                        sx={{
                          color: item.color,
                          "&.Mui-checked": {
                            color: item.color,
                            order: 0,
                          },
                          padding: "0px",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "0px",
                    gap: "30px",
                    width: "300px",
                    height: "20px",
                  }}
                >
                  <Typography>Size:</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      marginTop: "0px",
                      width: "100%",
                      height: "10px",
                      gap: "15px",
                    }}
                  >
                    <Button sx={{ width: "40px" }} variant="outlined">
                      <Typography>XS</Typography>
                    </Button>
                    <Button sx={{ width: "40px" }} variant="outlined">
                      <Typography>S</Typography>
                    </Button>
                    <Button sx={{ width: "40px" }} variant="outlined">
                      <Typography>M</Typography>
                    </Button>
                    <Button sx={{ width: "40px" }} variant="outlined">
                      <Typography>L</Typography>
                    </Button>
                    <Button sx={{ width: "40px" }} variant="outlined">
                      <Typography>XL</Typography>
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "0px",
                    marginTop: "20px",
                    width: "100%",
                    height: "44px",
                    gap: "15px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                  >
                    <Button
                      onClick={() => {
                        if (number > 1) {
                          setNumber(number - 1);
                        }
                      }}
                    >
                      <RemoveOutlinedIcon></RemoveOutlinedIcon>
                    </Button>
                    <Button
                      onChange={(e: any) => setQuantity(e.target.value)}
                      variant="outlined"
                      sx={{
                        width: "70px",
                        borderRadius: 0,
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      {number}
                    </Button>
                    <Button
                      onClick={() => {
                        setNumber(number + 1);
                      }}
                      color="danger"
                    >
                      <AddOutlinedIcon></AddOutlinedIcon>
                    </Button>
                  </ButtonGroup>
                  <Button color="danger" sx={{ width: 165, height: "44px" }}>
                    add to cart
                  </Button>
                  <Button
                    sx={{ height: "40px", width: "40px" }}
                    variant="outlined"
                  >
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: "17px",
                    marginTop: "20px",
                    width: "100%",
                    height: "180px",
                    gap: "5px",
                    justifyContent: "center",
                    alignContent: "center",
                    border: "1px solid gray",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      paddingLeft: "15px",
                      width: "100%",
                      height: "50px",
                      gap: "10px",
                      alignContent: "center",
                      borderBottom: "1px solid",
                    }}
                  >
                    <SvgIcon fontSize={"large"}>
                      <AirportShuttleIcon></AirportShuttleIcon>
                    </SvgIcon>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        paddingLeft: "15px",
                        width: "100%",
                        height: "50px",
                        gap: "0px",
                        alignContent: "center",
                      }}
                    >
                      <Typography fontSize={"16px"} fontWeight={500}>
                        Free Delivery
                      </Typography>
                      <Typography
                        fontSize={"12px"}
                        fontWeight={500}
                        sx={{ textDecorationLine: "underline" }}
                      >
                        Enter your postal code for Delivery Availability
                      </Typography>
                    </Box>
                  </Box>
                  <Divider orientation="horizontal" variant="middle" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      paddingLeft: "15px",
                      width: "100%",
                      height: "50px",
                      gap: "10px",
                      alignContent: "center",
                    }}
                  >
                    <SvgIcon fontSize={"large"}>
                      <CachedIcon></CachedIcon>
                    </SvgIcon>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        paddingLeft: "15px",
                        width: "100%",
                        height: "50px",
                        gap: "0px",
                        alignContent: "center",
                      }}
                    >
                      <Typography fontSize={"16px"} fontWeight={500}>
                        Return Delivery
                      </Typography>
                      <Typography fontSize={"12px"} fontWeight={500}>
                        Free 30 Days Delivery Returns.{" "}
                        <Typography
                          fontSize={"12px"}
                          fontWeight={500}
                          sx={{ textDecorationLine: "underline" }}
                        >
                          Details
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </div>

        <div className="reviews">
          <div className="container">
            <h2> Our Happy Clients </h2>
            <div className="reviewSection">
              {product?.review_rates.map((item: any, key: number) => (
                <div key={key} className="reviewItem">
                  <div className="top">
                    <div className="clientImage">
                      <span>{item?.user.firstname + " " + item?.user.lastname}</span>
                    </div>
                  </div>
                  <article>
                    <p style={{marginLeft: "5px"}} className="review">{item?.comment}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <OneViewRelated products={products} />
      <div style={{ position: "relative", top: "100px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Page;
