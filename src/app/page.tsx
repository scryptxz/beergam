"use client";
import Categories from "@/components/categories";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [productsCategory, setProductsCategory] =
    useState<string>("mais_cresceram");
  return (
    <>
      <Navbar />
      <Header
        productsCategory={productsCategory}
        setProductsCategory={setProductsCategory}
      />{" "}
      <Categories />
    </>
  );
}
