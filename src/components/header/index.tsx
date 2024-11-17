import Image from "next/image";
import TendenciasLogo from "@/assets/images/ph-logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Destacados from "../destacados";
import { useState } from "react";
import Favorites from "../favorites";

type ExploreProps = {
  productsCategory: string;
  setProductsCategory: (value: string) => void;
};

export default function Header(props: ExploreProps) {
  const { productsCategory, setProductsCategory } = props;

  const [tab, setTab] = useState("destacados");
  return (
    <>
      <header className="p-4">
        <div
          className={`absolute inset-0 -z-50 h-[20rem] w-full bg-gradient-to-b from-orange-300 to-orange-500 ${
            tab === "favoritos" && "!h-[10rem]"
          }`}
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={`absolute left-0 top-[19.5rem] rotate-180 ${
            tab === "favoritos" && "!top-[9.5rem] -z-10"
          }`}
        >
          <path
            fill="#FF8A00"
            fillOpacity="1"
            d="M0,256L34.3,261.3C68.6,267,137,277,206,266.7C274.3,256,343,224,411,208C480,192,549,192,617,202.7C685.7,213,754,235,823,240C891.4,245,960,235,1029,240C1097.1,245,1166,267,1234,272C1302.9,277,1371,267,1406,261.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <div className="mx-auto flex w-[85%] flex-wrap items-start gap-12 font-bold max-lg:justify-center max-lg:gap-2">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image src={TendenciasLogo} alt="Logo tendencias" />
            <h1 className="text-2xl font-extrabold">Tendencias</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-2 rounded-full bg-black bg-opacity-10 px-2 py-2 max-lg:bg-transparent">
            {/* Destacados */}
            <button
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 opacity-50 ${
                tab === "destacados" && "bg-white text-orange-500 !opacity-100"
              }`}
              onClick={() => setTab("destacados")}
            >
              <Icon icon="ion:menu" width="1.5em" height="1.5em" />
              <span className="text-black">Destacados</span>
              <span
                className={`flex items-center gap-1 rounded-xl bg-blue-100 px-2 py-[1px] text-sm ${
                  tab !== "destacados" &&
                  "shadow-lg shadow-[rgba(21,21,20,0.3)]"
                }`}
              >
                12
                <Icon icon="mdi:alert-decagram" width="1em" />
              </span>
            </button>
            {/* Favoritos */}
            <button
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 opacity-50 ${
                tab === "favoritos" && "bg-white text-orange-500 !opacity-100"
              }`}
              onClick={() => setTab("favoritos")}
            >
              <Icon icon="ion:heart-outline" width="1.5em" />
              <span className="text-black">Favoritos</span>
            </button>
          </div>
        </div>
        {tab === "destacados" ? (
          <Destacados
            productsCategory={productsCategory}
            setProductsCategory={setProductsCategory}
          />
        ) : (
          <Favorites />
        )}
      </header>
    </>
  );
}
