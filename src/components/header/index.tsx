import Image from "next/image";
import TendenciasLogo from "@/assets/images/ph-logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import HeaderExplore from "../header-explore";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-orange-300 to-orange-500 h-[25rem] p-4">
      <div className="flex items-start gap-12 w-[80%] mx-auto font-bold">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src={TendenciasLogo} alt="Logo tendencias" />
          <h1 className="text-2xl font-extrabold">Tendencias</h1>
        </div>

        <div className="flex items-center gap-4 bg-black rounded-full py-2 pl-2 pr-5 bg-opacity-10">
          {/* Destacados */}
          <button className="flex items-center gap-2 rounded-full px-3 py-1 bg-white text-orange-500">
            <Icon icon="ion:menu" width="1.5em" height="1.5em" />
            <span className="text-black">Destacados</span>
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl bg-blue-50">
              <span>12</span>
              <Icon icon="mdi:alert-decagram" width="1.2em" />
            </div>
          </button>
          {/* Favoritos */}
          <button className="flex items-center gap-2 rounded-full opacity-40">
            <Icon icon="ion:heart-outline" width="1.5em" />
            <span className="text-black">Favoritos</span>
          </button>
        </div>
      </div>
      <HeaderExplore />
    </header>
  );
}
