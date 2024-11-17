"use client"
import Categories from "@/components/categories";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import { useState } from "react";

export default function Home() {
  const [productsCategory, setProductsCategory] = useState<string>("mais_cresceram")
  return (
    <>
      <Navbar />
      <Header productsCategory={productsCategory} setProductsCategory={setProductsCategory} />
      {
        productsCategory && <Products productsCategory={productsCategory} />
      }
      <Categories />
    </>
  );
}
