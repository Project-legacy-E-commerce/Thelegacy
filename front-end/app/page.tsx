"use client"


import Header from "@/component/Header";
import TopHeader from "@/component/TopHeader";
import { Slide } from "@mui/material";
import SlideCategories from "@/component/SlideCategories";

export default function Home() {
  return (
    <div>
        <Header />
        <SlideCategories />
    </div>
  );
}
