import LogoDesejadas from "@/assets/images/favorites/desejadas-logo.png";
import LogoCrescimento from "@/assets/images/favorites/crescimento-logo.png";
import LogoPopulares from "@/assets/images/favorites/populares-logo.png";
import Image from "next/image";
import Products from "../products";
import "animate.css";

export default function Favorites() {
  return (
    <section className="animate__animated animate__fadeIn animate__faster relative mx-auto mt-28 flex w-[85%] flex-wrap items-center justify-around text-white max-2xl:justify-center max-2xl:gap-12">
      {/* Mais desejados */}
      <div className="flex h-32 w-96 cursor-default items-start gap-4 rounded-xl bg-white p-4 text-black shadow-xl duration-200 hover:-translate-y-1 hover:bg-blue-50">
        <Image src={LogoDesejadas} alt="Logo desejadas" />
        <div className="flex h-full w-full flex-col gap-1">
          <span className="text-sm text-gray-500">Favorito</span>
          <h2 className="text-lg font-bold">Mais desejados</h2>
          <p className="font-semibold">
            <span className="text-blue-400">30%</span> Participação geral
          </p>
          <div className="relative">
            <hr className="bg-gray-200 !h-1 w-full border-none" />
            <hr className="absolute inset-0 !h-1 w-[30%] border-none bg-blue-400" />
          </div>
        </div>
      </div>

      {/* Maior crescimento */}
      <div className="flex h-32 w-96 cursor-default items-start gap-4 rounded-xl bg-white p-4 text-black shadow-xl duration-200 hover:-translate-y-1 hover:bg-blue-50">
        <Image src={LogoCrescimento} alt="Logo desejadas" />
        <div className="flex h-full w-full flex-col gap-1">
          <span className="text-sm text-gray-500">Favorito</span>
          <h2 className="text-lg font-bold">Maior crescimento</h2>
          <p className="font-semibold">
            <span className="text-orange-500">40%</span> Participação geral
          </p>
          <div className="relative">
            <hr className="bg-gray-200 !h-1 w-full border-none" />
            <hr className="absolute inset-0 !h-1 w-[40%] border-none bg-orange-500" />
          </div>
        </div>
      </div>

      {/* Mais populares */}
      <div className="flex h-32 w-96 cursor-default items-start gap-4 rounded-xl bg-white p-4 text-black shadow-xl duration-200 hover:-translate-y-1 hover:bg-blue-50">
        <Image src={LogoPopulares} alt="Logo desejadas" />
        <div className="flex h-full w-full flex-col gap-1">
          <span className="text-sm text-gray-500">Favorito</span>
          <h2 className="text-lg font-bold">Mais populares</h2>
          <p className="font-semibold">
            <span className="text-blue-600">50%</span> Participação geral
          </p>
          <div className="relative">
            <hr className="bg-gray-200 !h-1 w-full border-none" />
            <hr className="absolute inset-0 !h-1 w-[50%] border-none bg-blue-600" />
          </div>
        </div>
      </div>

      <Products
        productsCategory={"favoritos"}
        title="Adicionados recentemente"
        title_icon="mdi:filter-variant"
      />
    </section>
  );
}
