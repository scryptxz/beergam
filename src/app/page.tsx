import Categories from "@/components/categories";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Products from "@/components/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <Categories />
    </>
  );
}
