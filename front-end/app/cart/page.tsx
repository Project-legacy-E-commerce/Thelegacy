import Header from "@/components/Header";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ProductsList from "@/components/ProductsList";
export default function Cart() {
  return (
    <div>
      <Header />
      <Breadcrumbs style={{ margin: "50px 0 0 40px" }} aria-label="breadcrumb">
        <Link style={{ textDecoration: "none", color: "#000" }} href="/">
          Home
        </Link>
        <Typography color="text.primary">Cart</Typography>
      </Breadcrumbs>
      <ProductsList />
    </div>
  );
}
