"use client";
import Categories from "@/components/categories";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar-mobile";
import { useState } from "react";

export default function Home() {
  const [productsCategory, setProductsCategory] =
    useState<string>("mais_cresceram");
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Header
        productsCategory={productsCategory}
        setProductsCategory={setProductsCategory}
      />
      <Categories />
    </>
  );
}
