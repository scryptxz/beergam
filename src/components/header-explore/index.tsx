import Vaso from "@/assets/images/header-explore/vaso.png";
import CaixaJardim from "@/assets/images/header-explore/caixa-jardim.png";
import Varetas from "@/assets/images/header-explore/varetas.png";
import RedFlower from "@/assets/images/header-explore/red-flower.png";

import BlueShirt from "@/assets/images/header-explore/blue-shirt.png";
import Bag from "@/assets/images/header-explore/bag-shadow.png";
import Shoe from "@/assets/images/header-explore/top-shoe.png";
import Bush from "@/assets/images/header-explore/bush.png";

import Headphone from "@/assets/images/header-explore/headphone.png";
import Lemon from "@/assets/images/header-explore/lemon.png";
import Phone from "@/assets/images/header-explore/phone.png";
import PhoneSide from "@/assets/images/header-explore/phone-side.png";
import BushBox from "@/assets/images/header-explore/bush-box.png";

import Image from "next/image";

type ExploreProps = {
  productsCategory: string | null;
  setProductsCategory: (value: string | null) => void;
};

export default function HeaderExplore(props: ExploreProps) {
  const { productsCategory, setProductsCategory } = props;

  return (
    <section className="flex items-center justify-between flex-wrap relative top-16 w-[85%] mx-auto text-white max-2xl:justify-center max-2xl:gap-12 animate__animated animate__fadeIn animate__faster">
      {/* Buscas que cresceram */}
      <div
        className={`relative group w-[22rem] h-[30rem] opacity-80 rounded-3xl cursor-pointer bg-blue-600 bg-opacity-60 backdrop-blur-3xl hover:opacity-100 hover:bg-opacity-80 duration-500 shadow-2xl ${
          productsCategory === "mais_cresceram" &&
          "!opacity-100 !bg-opacity-80 duration-300"
        }`}
        onClick={() => {
          productsCategory === "mais_cresceram"
            ? setProductsCategory(null)
            : setProductsCategory("mais_cresceram");
        }}>
        <h2 className="font-bold p-10 text-3xl">Buscas que mais cresceram</h2>
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
          className={`absolute bottom-0 -left-12 group-hover:scale-105 group-hover:translate-x-3 duration-500 ${
            productsCategory === "mais_cresceram" && "scale-105 translate-x-3"
          }`}
        />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Varetas}
            alt="Varetas em um vasinho"
            className={`absolute bottom-0 right-24 group-hover:scale-105 group-hover:right-20 duration-500 ${
              productsCategory === "mais_cresceram" && "scale-105 !right-20"
            }`}
          />
          <Image
            src={RedFlower}
            alt="Flores vermelhas"
            className={`absolute rotate-45 -right-48 bottom-0 group-hover:rotate-0 group-hover:right-0 duration-500 ${
              productsCategory === "mais_cresceram" && "!rotate-0 !right-0"
            }`}
          />
        </div>
      </div>

      {/* Buscas mais desejadas */}
      <div
        className={`relative group w-[22rem] h-[30rem] opacity-75 rounded-3xl cursor-pointer bg-gray-100 backdrop-blur-3xl hover:opacity-100 duration-500 shadow-2xl max-lg:hidden ${
          productsCategory === "mais_desejadas" && "!opacity-100"
        }`}
        onClick={() => {
          productsCategory === "mais_desejadas"
            ? setProductsCategory(null)
            : setProductsCategory("mais_desejadas");
        }}>
        <h2 className="font-bold p-10 text-3xl">Buscas mais desejadas</h2>
        <Image
          src={BlueShirt}
          alt="Camiseta azul"
          className={`absolute -right-16 -top-2 [filter:drop-shadow(10px_0_0_rgba(0,_0,_0,_0.2))] ${
            productsCategory === "mais_desejadas" && "animate-shake origin-top"
          }`}
        />
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-orange-300 rounded-full blur-2xl opacity-50"></div>
          <Image
            src={Shoe}
            alt="Tênis"
            className={`absolute bottom-0 -left-8 top-36 group-hover:scale-105 group-hover:-rotate-6 group-hover:translate-x-8 duration-500 ${
              productsCategory === "mais_desejadas" &&
              "scale-105 -rotate-6 translate-x-8"
            }`}
          />
          <Image
            src={Bag}
            alt="Bolsa"
            className={`absolute top-80 right-0 origin-bottom-left group-hover:scale-110 duration-500 ${
              productsCategory === "mais_desejadas" && "scale-110"
            }`}
          />
          <Image
            src={Bush}
            alt="Arbusto"
            className={`absolute -left-14 -bottom-32 group-hover:-translate-y-8 group-hover:translate-x-5 group-hover:rotate-12 duration-500 ${
              productsCategory === "mais_desejadas" &&
              "-translate-y-8 translate-x-5 rotate-12"
            }`}
          />
        </div>
      </div>

      {/* Tendências mais populares */}
      <div
        className={`relative group w-[22rem] h-[30rem] opacity-75 rounded-3xl cursor-pointer bg-blue-500 bg-opacity-50 backdrop-blur-3xl hover:opacity-100 hover:bg-opacity-80 duration-500 shadow-2xl max-2xl:hidden ${
          productsCategory === "mais_populares" && "!opacity-100 !bg-opacity-80"
        }`}
        onClick={() => {
          productsCategory === "mais_populares"
            ? setProductsCategory(null)
            : setProductsCategory("mais_populares");
        }}>
        <h2 className="font-bold p-10 text-3xl">Tendências mais populares</h2>
        <Image
          src={Phone}
          alt="Smartphone"
          className={`absolute -right-10 top-24 z-10 [filter:drop-shadow(15px_0_10px_rgba(0,_0,_0,_0.4))] origin-bottom-left group-hover:scale-105 duration-500 ${
            productsCategory === "mais_populares" && "scale-105"
          }`}
        />
        <Image
          src={Headphone}
          alt="Fone de ouvido"
          className={`absolute top-28 -left-24 group-hover:scale-110 group-hover:-rotate-12 group-hover:-translate-y-8 group-hover:-translate-x-2 duration-500 ${
            productsCategory === "mais_populares" &&
            "scale-110 -rotate-12 -translate-y-8 -translate-x-2"
          }`}
        />
        <Image
          src={Lemon}
          alt="Limão"
          className={`absolute right-12 top-28 group-hover:-rotate-6 group-hover:scale-110 origin-bottom-right duration-500 ${
            productsCategory === "mais_populares" && "scale-110 -rotate-6"
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
            className={`absolute -left-24 -bottom-52 duration-500 group-hover:rotate-12 group-hover:-translate-y-4 ${
              productsCategory === "mais_populares" &&
              "rotate-12 -translate-y-4"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
