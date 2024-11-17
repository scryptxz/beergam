import LogoDesejadas from "@/assets/images/favorites/desejadas-logo.png";
import LogoCrescimento from "@/assets/images/favorites/crescimento-logo.png";
import LogoPopulares from "@/assets/images/favorites/populares-logo.png";
import Image from "next/image";
import 'animate.css';

export default function Favorites() {
  return (
    <section className="flex items-center justify-around flex-wrap relative mt-28 w-[85%] mx-auto text-white max-2xl:justify-center max-2xl:gap-12 animate__animated animate__fadeIn animate__faster">
        
      {/* Mais desejados */}
      <div className="flex items-start gap-4 bg-white rounded-xl w-96 h-32 p-4 shadow-xl text-black">
        <Image src={LogoDesejadas} alt="Logo desejadas" />
        <div className="flex flex-col gap-1 h-full w-full">
          <span className="text-gray-500 text-sm">Favorito</span>
          <h2 className="font-bold text-lg">Mais desejados</h2>
          <p className="font-semibold">
            <span className="text-blue-400">30%</span> Participação geral
          </p>
          <div className="relative">
            <hr className="w-full !h-1 bg-gray-100 border-none" />
            <hr className="absolute inset-0 w-[30%] !h-1 bg-blue-400 border-none" />
          </div>
        </div>
      </div>

      {/* Maior crescimento */}
      <div className="flex items-start gap-4 bg-white rounded-xl w-96 h-32 p-4 shadow-xl text-black">
        <Image src={LogoCrescimento} alt="Logo desejadas" />
        <div className="flex flex-col gap-1 h-full w-full">
          <span className="text-gray-500 text-sm">Favorito</span>
          <h2 className="font-bold text-lg">Maior crescimento</h2>
          <p className="font-semibold">
            <span className="text-orange-500">40%</span> Participação geral
          </p>
          <div className="relative">
            <hr className="w-full !h-1 bg-gray-100 border-none" />
            <hr className="absolute inset-0 w-[40%] !h-1 bg-orange-500 border-none" />
          </div>
        </div>
      </div>

      {/* Mais populares */}
      <div className="flex items-start gap-4 bg-white rounded-xl w-96 h-32 p-4 shadow-xl text-black">
        <Image src={LogoPopulares} alt="Logo desejadas" />
        <div className="flex flex-col gap-1 h-full w-full">
          <span className="text-gray-500 text-sm">Favorito</span>
          <h2 className="font-bold text-lg">Mais populares</h2>
          <p className="font-semibold">
            <span className="text-blue-600">50%</span> Participação geral
          </p>
          <div className="relative">
            <hr className="w-full !h-1 bg-gray-100 border-none" />
            <hr className="absolute inset-0 w-[50%] !h-1 bg-blue-600 border-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
