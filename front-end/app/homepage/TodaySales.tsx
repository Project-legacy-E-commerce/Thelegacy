import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductPromo from "@/app/homepage/functions/FetchPromo";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useState, useEffect, useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function TodaySales() {
  const productData = ProductPromo();
  const sliderRef = useRef(0);
  const scrollAmount = 100;
  const router = useRouter();

  const hundleLike = (data: any) => {
    axios
      .post(`http://localhost:3000/wishlist/add/:id/:iduser`, data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <div
            style={{
              height: "40px",
              width: "20px",
              borderRadius: "4px",
              backgroundColor: "rgba(219, 68, 68, 1)",
            }}
          >
            <Typography
              sx={{
                marginLeft: "30px",
                fontFamily: "Poppins",
                color: "rgba(219, 68, 68, 1)",
                paddingTop: "10px",
                fontWeight: "bold",
              }}
            >
              Today's
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontFamily={"Inter"}
            letterSpacing={"4%"}
            textColor={"common.black"}
          >
            Flash Sales
          </Typography>
        </Box>
        <Box>
          <Button
            color="false"
            sx={{ width: "30px", height: "30px" }}
            className="nav-btn"
            onClick={() => {
              var container = sliderRef.current;
              container -= scrollAmount;
            }}
          >
            <NavigateBeforeIcon fontSize="large" />
          </Button>
          <Button
            color="false"
            sx={{ width: "30px", height: "30px" }}
            className="nav-btn"
            onClick={() => {
              var container = sliderRef.current;
              container += scrollAmount;
              window.scrollBy(container, 0);
            }}
          >
            <NavigateNextIcon fontSize="large" />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          overflow: "scroll",
          scrollBehavior: "smooth",
          transition: "scroll 0.3s ease-in-out",
        }}
      >
        {productData.map((e) => {
          return (
            <Box
              display={"inline-flex"}
              sx={{ marginRight: "30px" }}
              ref={sliderRef}
            >
              <Card sx={{ width: 250, maxWidth: "100%", boxShadow: "lg" }}>
                <div>
                  <Typography
                    sx={{
                      height: "25px",
                      width: "55px",
                      textAlign: "center",
                      fontFamily: "cursive",
                      borderRadius: "4px",
                      color: "wheat",
                      backgroundColor: "rgba(219, 68, 68, 1)",
                    }}
                  >
                    -{e.initalprice - e.currentprice}%
                  </Typography>
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
                      hundleLike({
                        product: e,
                        userIduser: localStorage.getItem("id"),
                      })
                    }
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="md"
                    sx={{
                      position: "absolute",
                      top: "2.8rem",
                      right: "0.5rem",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      zIndex: "1",
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </div>
                <CardOverflow>
                  <AspectRatio sx={{ minWidth: 100 }}>
                    <img
                      src={e.imgurlmain}
                      srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="body-xs">{e.category}</Typography>
                  <Link
                    href="#product-card"
                    fontWeight="md"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                    endDecorator={<ArrowOutwardIcon />}
                  >
                    {e.name}
                  </Link>

                  <Typography
                    fontSize="lg"
                    fontWeight="lg"
                    sx={{ color: "red" }}
                  >
                    ${e.currentprice}
                    <Typography
                      fontWeight="10px"
                      sx={{
                        color: "gray",
                        marginLeft: "10px",
                        textDecoration: "line-through",
                      }}
                    >
                      ${e.initalprice}
                    </Typography>
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <Rating
                      name="half-rating"
                      defaultValue={e.review_rates.length}
                      precision={0.5}
                      readOnly
                    />
                    <span style={{ marginTop: "0px" }}>
                      ({e.review_rates.length})
                    </span>
                  </Stack>
                </CardContent>
                <CardOverflow>
                  <Button
                    variant="solid"
                    sx={{
                      backgroundColor: "black",
                      ":hover": { backgroundColor: "rgba(219, 68, 68, 1)" },
                    }}
                    size="lg"
                    onClick={() => router.push("/")}
                  >
                    Add to cart
                  </Button>
                </CardOverflow>
              </Card>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <Button
          onClick={() => router.push("/flashsale")}
          color="neutral"
          sx={{
            mt: 3,
            mb: 2,
            width: "250px",
            height: "50px",
            bgcolor: "rgba(219, 68, 68, 1)",
          }}
        >
          View All Products
        </Button>
      </Box>
    </Container>
  );
}
