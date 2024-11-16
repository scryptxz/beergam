import Vaso from "@/assets/images/header-explore/vaso.png";
import CaixaJardim from "@/assets/images/header-explore/caixa-jardim.png";
import Varetas from "@/assets/images/header-explore/varetas.png";
import RedFlower from "@/assets/images/header-explore/red-flower.png";

import BlueShirt from "@/assets/images/header-explore/blue-shirt.png";
import Bag from "@/assets/images/header-explore/bag-shadow.png";
import Shoe from "@/assets/images/header-explore/top-shoe.png";
import Bush from "@/assets/images/header-explore/bush.png";

import Image from "next/image";

export default function HeaderExplore() {
  return (
    <div className="flex items-center justify-between relative top-16 w-[80%] mx-auto text-white">
      {/* Buscas que cresceram */}
      <div className="relative group w-[22rem] h-[30rem] opacity-90 rounded-3xl cursor-pointer bg-blue-600 bg-opacity-60 backdrop-blur-3xl hover:opacity-100 hover:bg-opacity-80 duration-500">
        <h2 className="font-bold p-10 text-3xl">Buscas que mais cresceram</h2>
        <Image src={Vaso} alt="" className="absolute -right-7 top-5 [filter:drop-shadow(15px_0_10px_rgba(0,_0,_0,_0.5))]" />
        <Image src={CaixaJardim} alt="" className="absolute bottom-0 -left-12 group-hover:scale-105 group-hover:translate-x-3 duration-500" />
        <Image src={Varetas} alt="" className="absolute bottom-0 right-24 group-hover:scale-105 group-hover:right-20 duration-500" />
        <div className="absolute inset-0 overflow-hidden">
            <Image src={RedFlower} alt="" className="absolute rotate-90 -right-48 bottom-0 group-hover:rotate-0 group-hover:right-0 duration-300" />
        </div>
      </div>

      {/* Buscas mais desejadas */}
      <div className="relative group w-[22rem] h-[30rem] opacity-80 rounded-3xl cursor-pointer bg-gray-100 backdrop-blur-3xl hover:opacity-100 duration-500">
        <h2 className="font-bold p-10 text-3xl">Buscas mais desejadas</h2>
        <Image src={BlueShirt} alt="" className="absolute -right-16 -top-2 [filter:drop-shadow(10px_0_0_rgba(0,_0,_0,_0.2))]" />
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-orange-300 rounded-full blur-2xl opacity-50"></div>
            <Image src={Shoe} alt="" className="absolute bottom-0 -left-8 top-36 group-hover:scale-105 group-hover:-rotate-6 group-hover:translate-x-8 duration-500" />
            <Image src={Bag} alt="" className="absolute top-80 right-0 group-hover:scale-110 duration-500" />
            <Image src={Bush} alt="" className="absolute -left-14 -bottom-32 group-hover:-translate-y-8 group-hover:translate-x-5 group-hover:rotate-12 duration-300" />
        </div>
      </div>

      {/* Buscas que cresceram */}
      <div className="relative group w-[22rem] h-[30rem] opacity-80 rounded-3xl cursor-pointer bg-blue-600 bg-opacity-50 backdrop-blur-3xl hover:opacity-100 duration-500">
        <h2 className="font-bold p-10 text-3xl">Buscas que mais cresceram</h2>
        <Image src={Vaso} alt="" className="absolute -right-7 top-5 [filter:drop-shadow(15px_0_10px_rgba(0,_0,_0,_0.4))]" />
        <Image src={CaixaJardim} alt="" className="absolute bottom-0 -left-12 group-hover:scale-105 group-hover:-left-10 duration-500" />
        <Image src={Varetas} alt="" className="absolute bottom-0 right-24 group-hover:scale-105 group-hover:right-20 duration-500" />
        <Image src={RedFlower} alt="" className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 duration-300" />
      </div>

    </div>
  );
}
