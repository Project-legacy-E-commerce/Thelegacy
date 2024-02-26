

import React from "react";
import Header from "@/components/Header";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import All from "../../components/All"

export default function details() {
    return (
      <div>
        <Header />
        <Breadcrumbs
          style={{ margin: "50px 0 0 40px" }}
          aria-label="breadcrumb"
        >
          <Link style={{ textDecoration: "none", color: "#000" }} href="/">
            Cart
          </Link>
          <Typography color="text.primary">detail</Typography>
        </Breadcrumbs>
       
          <All />
   
      </div>
    );
}