"use client";

import Header from "@/components/Header";
import { Box, Container } from "@mui/system";
import * as React from "react";
import Slides from "@/app/homepage/slides";
import TodaySales from "@/app/homepage/TodaySales";
import ByCategory from "@/app/homepage/ByCategory";
import JBL from "@/app/homepage/JBL";
import AllProducts from "@/app/homepage/AllProducts";
import NewArrivals from "@/app/homepage/NewArrival";
import Services from "@/app/homepage/Services";

export default function () {
  return (
    <div>
      <Header />
      <Slides />
      <TodaySales />
      <ByCategory />
      <JBL />
      <AllProducts />
      <NewArrivals />
      <Services />
    </div>
  );
}
