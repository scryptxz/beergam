import Vaso from "@/assets/images/destacados/vaso.png";
import CaixaJardim from "@/assets/images/destacados/caixa-jardim.png";
import Varetas from "@/assets/images/destacados/varetas.png";
import RedFlower from "@/assets/images/destacados/red-flower.png";

import BlueShirt from "@/assets/images/destacados/blue-shirt.png";
import Bag from "@/assets/images/destacados/bag-shadow.png";
import Shoe from "@/assets/images/destacados/top-shoe.png";
import Bush from "@/assets/images/destacados/bush.png";

import Headphone from "@/assets/images/destacados/headphone.png";
import Lemon from "@/assets/images/destacados/lemon.png";
import Phone from "@/assets/images/destacados/phone.png";
import PhoneSide from "@/assets/images/destacados/phone-side.png";
import BushBox from "@/assets/images/destacados/bush-box.png";

import Image from "next/image";
import Products from "../products";

type ExploreProps = {
  productsCategory: string;
  setProductsCategory: (value: string) => void;
};

export default function Destacados(props: ExploreProps) {
  const { productsCategory, setProductsCategory } = props;

  return (
    <section className="animate__animated animate__fadeIn animate__faster relative top-16 mx-auto flex w-[85%] flex-wrap items-center justify-between text-white max-2xl:justify-center max-2xl:gap-12">
      {/* Buscas que cresceram */}
      <div
        className={`group relative h-[30rem] w-[22rem] cursor-pointer rounded-3xl bg-blue-600 bg-opacity-60 opacity-80 shadow-2xl backdrop-blur-3xl duration-500 hover:bg-opacity-80 hover:opacity-100 ${
          productsCategory === "mais_cresceram" &&
          "!bg-opacity-80 !opacity-100 duration-300"
        }`}
        onClick={() => setProductsCategory("mais_cresceram")}
      >
        <h2 className="p-10 text-3xl font-bold">Buscas que mais cresceram</h2>
        <Image
          src={Vaso}
          alt="Vaso"
          className={`absolute -right-7 top-5 [filter:drop-shadow(15px_0_10px_rgba(0,_0,_0,_0.5))] ${
            productsCategory === "mais_cresceram" && "animate-shake"
          }`}
        />
        <Image
          src={CaixaJardim}
          alt="Caixa de um jardim"
          className={`absolute -left-12 bottom-0 duration-500 group-hover:translate-x-3 group-hover:scale-105 ${
            productsCategory === "mais_cresceram" && "translate-x-3 scale-105"
          }`}
        />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Varetas}
            alt="Varetas em um vasinho"
            className={`absolute bottom-0 right-24 duration-500 group-hover:right-20 group-hover:scale-105 ${
              productsCategory === "mais_cresceram" && "!right-20 scale-105"
            }`}
          />
          <Image
            src={RedFlower}
            alt="Flores vermelhas"
            className={`absolute -right-48 bottom-0 rotate-45 duration-500 group-hover:right-0 group-hover:rotate-0 ${
              productsCategory === "mais_cresceram" && "!right-0 !rotate-0"
            }`}
          />
        </div>
      </div>

      {/* Buscas mais desejadas */}
      <div
        className={`group relative h-[30rem] w-[22rem] cursor-pointer rounded-3xl bg-gray-100 opacity-75 shadow-2xl backdrop-blur-3xl duration-500 hover:opacity-100 max-lg:hidden ${
          productsCategory === "mais_desejadas" && "!opacity-100"
        }`}
        onClick={() => setProductsCategory("mais_desejadas")}
      >
        <h2 className="p-10 text-3xl font-bold">Buscas mais desejadas</h2>
        <Image
          src={BlueShirt}
          alt="Camiseta azul"
          className={`absolute -right-16 -top-2 [filter:drop-shadow(10px_0_0_rgba(0,_0,_0,_0.2))] ${
            productsCategory === "mais_desejadas" && "origin-top animate-shake"
          }`}
        />
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-orange-300 opacity-50 blur-2xl"></div>
          <Image
            src={Shoe}
            alt="Tênis"
            className={`absolute -left-8 bottom-0 top-36 duration-500 group-hover:translate-x-8 group-hover:-rotate-6 group-hover:scale-105 ${
              productsCategory === "mais_desejadas" &&
              "translate-x-8 -rotate-6 scale-105"
            }`}
          />
          <Image
            src={Bag}
            alt="Bolsa"
            className={`absolute right-0 top-80 origin-bottom-left duration-500 group-hover:scale-110 ${
              productsCategory === "mais_desejadas" && "scale-110"
            }`}
          />
          <Image
            src={Bush}
            alt="Arbusto"
            className={`absolute -bottom-32 -left-14 duration-500 group-hover:-translate-y-8 group-hover:translate-x-5 group-hover:rotate-12 ${
              productsCategory === "mais_desejadas" &&
              "-translate-y-8 translate-x-5 rotate-12"
            }`}
          />
        </div>
      </div>

      {/* Tendências mais populares */}
      <div
        className={`group relative h-[30rem] w-[22rem] cursor-pointer rounded-3xl bg-blue-500 bg-opacity-50 opacity-75 shadow-2xl backdrop-blur-3xl duration-500 hover:bg-opacity-80 hover:opacity-100 max-2xl:hidden ${
          productsCategory === "mais_populares" && "!bg-opacity-80 !opacity-100"
        }`}
        onClick={() => setProductsCategory("mais_populares")}
      >
        <h2 className="p-10 text-3xl font-bold">Tendências mais populares</h2>
        <Image
          src={Phone}
          alt="Smartphone"
          className={`absolute -right-10 top-24 z-10 origin-bottom-left duration-500 [filter:drop-shadow(15px_0_10px_rgba(0,_0,_0,_0.4))] group-hover:scale-105 ${
            productsCategory === "mais_populares" && "scale-105"
          }`}
        />
        <Image
          src={Headphone}
          alt="Fone de ouvido"
          className={`absolute -left-24 top-28 duration-500 group-hover:-translate-x-2 group-hover:-translate-y-8 group-hover:-rotate-12 group-hover:scale-110 ${
            productsCategory === "mais_populares" &&
            "-translate-x-2 -translate-y-8 -rotate-12 scale-110"
          }`}
        />
        <Image
          src={Lemon}
          alt="Limão"
          className={`absolute right-12 top-28 origin-bottom-right duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
            productsCategory === "mais_populares" && "-rotate-6 scale-110"
          }`}
        />
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image
            src={PhoneSide}
            alt="Lado de um smartphone"
            className={`absolute -bottom-6 right-32 ${
              productsCategory === "mais_populares" && "!bottom-0 duration-200"
            }`}
          />
          <Image
            src={BushBox}
            alt="Arbusto"
            className={`absolute -bottom-52 -left-24 duration-500 group-hover:-translate-y-4 group-hover:rotate-12 ${
              productsCategory === "mais_populares" &&
              "-translate-y-4 rotate-12"
            }`}
          />
        </div>
      </div>

      <Products
        productsCategory={productsCategory}
        title="As buscas que mais cresceram"
        title_icon="mdi:information-outline"
      />
    </section>
  );
}
