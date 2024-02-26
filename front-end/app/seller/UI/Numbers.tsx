"use client";
import * as MUI from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Products from "@/app/seller/Functions/FetchAllProducts";
import { useEffect, useRef, useState } from "react";

export default function Numbers() {
  const products = Products();

  const handleReview = () => {
    var review = 0;
    products.map((e) => {
      review = review + e.review_rates.length;
    });
    return review;
  };

  const handleTop = () => {
    var top = 0
    var best = 0
    products.map(e=>{
      e.review_rates?.map(rate=>{
        if(rate.rateofuser >= 4){
          return top++
        }
      })
      if(top/e.review_rates.length*5 >= 4){
        best++
        top=0
      }
    })
    return best
  }

  return (
    <MUI.Container>
      <MUI.Box
        sx={{
          p: 0,
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 4,
            width: 200,
            height: 170,
          },
        }}
      >
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <PeopleAltIcon sx={{ fontSize: "60px" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            20
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Clients
          </MUI.Typography>
        </MUI.Paper>
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Inventory2Icon sx={{ fontSize: "60px", color: "burlywood" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            {products.length}
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Products
          </MUI.Typography>
        </MUI.Paper>
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <StarBorderIcon sx={{ fontSize: "60px", color: "yellow" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            {handleTop()}
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Top Products
          </MUI.Typography>
        </MUI.Paper>
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <ReviewsIcon sx={{ fontSize: "60px", color: "rebeccapurple" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            {handleReview()}
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Reviews
          </MUI.Typography>
        </MUI.Paper>
      </MUI.Box>
    </MUI.Container>
  );
}
