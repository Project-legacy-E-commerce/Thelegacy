"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Cookies from "universal-cookie";
import {
  Favorite,
  DeleteForever as DeleteForeverIcon,
  AddShoppingCart,
  Visibility,
} from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
// import { cookies } from 'next/headers';

interface Product {
  productIdproduct: number;
  userIduser: number;
  product: {
    imgurlmain: string;
    name: string;
    currentprice: number;
    rate: number;
    status: string;
  };
}

export default function Wishlists() {
  // const cookies = new Cookies();
  const router = useRouter();
  const [data, setData] = React.useState<Product[]>([]);
  const [refresh, setRefresh] = React.useState(true);
  // cookies.set("token",1);
  React.useEffect(() => {
    // const id = localStorage.getItem("id");
    axios(`http://localhost:3000/wishlist/getAllwishlist/${1}`) //cookies.get(id) or get.cookies(id)
      .then((result) => {
        // get allwishlist of a specific user
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  console.log(data, "hh");

  const handleDelete = (userIduser: number, idproduct: number) => {
    axios
      .delete(
        `http://localhost:3000/wishlist/deletewishlist/${userIduser}/${idproduct}`
      )
      .then((result) => {
        setRefresh(!refresh);
        router.push("/wishlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlCreate = (userIduser: number, idproduct: number) => {
    axios
      .post(`http://localhost:3000/wishlist/toCart/${userIduser}/${idproduct}`)
      .then((result) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlMoveAll = (userIduser: number) => {
    axios
      .post(`http://localhost:3000/wishlist/allCart/${userIduser}`)
      .then((result) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h1  style={{ fontSize: "32px", fontWeight: "bold", color: "#333", textTransform: "uppercase", marginBottom: "20px" }}>WELCOME TO YOUR WISHLIST</h1>
        
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingLeft: "200px",
          paddingRight: "120px",
          paddingTop: "20px",
          paddingBottom: "20px", // Added padding bottom for space
        }}
      >
        {data.map((product) => (
          <Box display={"inline-flex"} sx={{ marginRight: "30px" }}>
            <Card
              sx={{
                width: 250,
                marginTop: "30px",
                backgroundColor: "rgba(245, 245, 245, 1)",
              }}
            >
              <div>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  variant="plain"
                  color="neutral"
                  size="md"
                  sx={{
                    position: "absolute",
                    top: "0.3rem",
                    right: "0.5rem",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    zIndex: 1,
                  }}
                  onClick={() =>
                    handleDelete(product.userIduser, product.productIdproduct)
                  }
                >
                  <DeleteForeverIcon />
                </IconButton>
              </div>
              <AspectRatio
                sx={{ maxWidth: "90%", marginLeft: "50px" }}
                minHeight="120px"
                maxHeight="120px"
              >
                <img
                  style={{ width: "120px", height: "120px" }}
                  src={product.product.imgurlmain}
                  alt="product"
                />
              </AspectRatio>
              <Button
                disabled={false}
                fullWidth
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{
                  alignSelf: "center",
                  fontWeight: 600,
                  backgroundColor: "black",
                  borderRadius: "none",
                }}
                onClick={() =>
                  handlCreate(product.userIduser, product.productIdproduct)
                }
              >
                <AddShoppingCart sx={{ marginRight: "15px" }} />
                Add to Cart
              </Button>
              <CardContent orientation="vertical" sx={{ gap: "5px" }}>
                <Typography level="title-lg">{product.product.name}</Typography>
                <CardContent orientation="horizontal">
                  <Typography
                    fontSize="s"
                    fontWeight="lg"
                    sx={{ color: "red" }}
                  >
                    ${product.product.currentprice}
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                  >
                    <Rating
                      name="half-rating"
                      defaultValue={product.product.rate}
                      precision={0.5}
                      readOnly
                    />
                    <span style={{ marginTop: "0px" }}>
                      ({product.product.rate})
                    </span>
                  </Stack>
                </CardContent>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <div style={{ display: "flex",justifyContent: "center" }}>
        <Button
          disabled={false}
          fullWidth={false}
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{
            alignSelf: "center",
            fontWeight: 600,
            backgroundColor: "black",
            borderRadius: "none",
          }}
          onClick={() => handlMoveAll(1)}
        >
          MOVE ALL TO CART{" "}
        </Button>
      </div>
    </div>
  );
}
