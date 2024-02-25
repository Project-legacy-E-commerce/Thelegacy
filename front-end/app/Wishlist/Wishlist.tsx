"use client";
import * as React from 'react';
import { useRouter } from "next/navigation";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import {
  Favorite,
  DeleteForever as DeleteForeverIcon,
  AddShoppingCart,
  Visibility,
} from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";


interface Product {
  productIdproduct: number,
  userIduser: number
  product: {
    imgurlmain: string ,
    name: string,
    currentprice: number,
    rate: number ,
    status: string,
  },
}

export default function Wishlists  ()  {
  const router = useRouter();
  const [data, setData] = React.useState<Product[]>([]);
  const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    // const id = localStorage.getItem("id");
    axios(`http://localhost:3000/wishlist/getAllwishlist/${2}`)
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

  return (
    <Box
      sx={{
        paddingLeft: "200px",
        paddingRight: "120px",
        gap: "10px",
        paddingTop: "100px",
        width: "100%",
      }}
    >
      {data.map((product) => (
        <Box
          display={"inline-flex"}
          sx={{ marginRight: "30px" }}
        >
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
              onClick={() => router.push("/oneview")}
            >
              <AddShoppingCart sx={{ marginRight: "15px" }} />
              Add to Cart
            </Button>
            <CardContent orientation="vertical" sx={{ gap: "5px" }}>
              <Typography level="title-lg">{product.product.name}</Typography>
              <CardContent orientation="horizontal">
                <Typography fontSize="s" fontWeight="lg" sx={{ color: "red" }}>
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
  );
};


