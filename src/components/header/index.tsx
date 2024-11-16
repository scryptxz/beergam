import Image from "next/image";
import TendenciasLogo from "@/assets/images/ph-logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import HeaderExplore from "../header-explore";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-orange-300 to-orange-500 h-[25rem] p-4">
      <div className="flex items-start flex-wrap gap-12 w-[85%] mx-auto font-bold max-lg:gap-2 max-lg:justify-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src={TendenciasLogo} alt="Logo tendencias" />
          <h1 className="text-2xl font-extrabold">Tendencias</h1>
        </div>

        <div className="flex items-center gap-4 bg-black rounded-full py-2 pl-2 pr-5 bg-opacity-10">
          {/* Destacados */}
          <button className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-white text-orange-500">
            <Icon icon="ion:menu" width="1.5em" height="1.5em" />
            <span className="text-black">Destacados</span>
            <span className="flex items-center gap-1 px-2 py-[1px] rounded-xl bg-blue-100 text-sm">
              12
              <Icon icon="mdi:alert-decagram" width="1em" />
            </span>
          </button>
          {/* Favoritos */}
          <button className="flex items-center gap-2 rounded-full opacity-50">
            <Icon icon="ion:heart-outline" width="1.5em" />
            <span className="text-black">Favoritos</span>
          </button>
        </div>
      </div>
      <HeaderExplore />
    </header>
  );
}
