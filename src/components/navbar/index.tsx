"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import NavLogo from "@/assets/images/nav-logo.png";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const pathname = usePathname();
  return (
    <nav
      className={`fixed left-4 top-5 z-20 flex h-[90%] flex-col items-center justify-between rounded-3xl px-2 py-7 text-white backdrop-blur-xl max-sm:hidden ${
        expand && "animate-expandMenu"
      }`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-600 to-blue-500 opacity-70 shadow-2xl shadow-black"></div>
      <button
        className="absolute -right-2 top-[60px] rounded-full border border-white bg-blue-600 bg-opacity-60 p-1"
        onClick={() => setExpand(!expand)}
      >
        {expand ? (
          <Icon icon="cuida:caret-left-outline" width={10} />
        ) : (
          <Icon icon="cuida:caret-right-outline" width={10} />
        )}
      </button>
      <ul
        className={`relative flex w-full flex-col items-center gap-6 text-gray-200 ${
          expand && "!items-start"
        }`}
      >
        <li className="-my-3 flex">
          <Icon
            icon="icon-park-outline:dot"
            width={15}
            className="text-blue-500"
          />
          <Icon
            icon="icon-park-outline:dot"
            width={15}
            className="text-orange-500"
          />
          <Icon
            icon="icon-park-outline:dot"
            width={15}
            className="text-blue-400"
          />
        </li>
        <li className={`p-2 ${expand && "ml-3"}`}>
          <button className="flex items-center gap-2 duration-200 hover:text-orange-500">
            <Image
              src={NavLogo}
              alt="Avatar"
              width={40}
              className="rounded-full"
            />
            {expand && <span className="text-sm font-extrabold">PEGAZUS</span>}
          </button>
        </li>
        <li className={`p-2 ${expand && "ml-3"}`}>
          <button className="flex items-center gap-2 duration-200 hover:text-orange-500">
            <Icon icon="ph:house-light" width={24} />
            {expand && <span className="text-xs">Resumos</span>}
          </button>
        </li>
        <li className={`p-2 ${expand && "ml-3"}`}>
          <button className="flex items-center gap-2 duration-200 hover:text-orange-500">
            <Icon icon="icons8:rouble" width={24} />
            {expand && <span className="text-xs">Publicidades</span>}
          </button>
        </li>
        <li className={`p-2 ${expand && "ml-3"}`}>
          <button className="flex items-center gap-2 duration-200 hover:text-orange-500">
            <Icon icon="ph:bag-light" width={24} />
            {expand && <span className="text-xs">Anúncios</span>}
          </button>
        </li>
        <li
          className={`border border-transparent p-2 ${
            pathname === "/" &&
            "relative overflow-clip rounded-lg border !border-white !border-opacity-20 text-orange-500"
          } ${expand && "ml-3"}`}
        >
          {pathname === "/" && (
            <div className="absolute inset-0 h-full w-full bg-orange-500 opacity-20 blur-lg"></div>
          )}
          <Link
            href={"/"}
            className="flex items-center gap-2 duration-200 hover:text-orange-500"
          >
            <Icon icon="ph:chart-line-light" width={24} />
            {expand && <span className="text-xs">Vendas</span>}
          </Link>
        </li>
        <li className={`p-2 ${expand && "ml-3"}`}>
          <button className="flex items-center gap-2 duration-200 hover:text-orange-500">
            <Icon icon="ph:chat-light" width={24} />
            {expand && <span className="text-xs">Atendimento</span>}
          </button>
        </li>
        <li className={`p-2 ${expand && "ml-3"}`}>
          <button className="flex items-center gap-2 duration-200 hover:text-orange-500">
            <Icon icon="ph:credit-card-light" width={24} />
            {expand && <span className="text-xs">Despesas</span>}
          </button>
        </li>
        <li
          className={`border border-transparent p-2 ${
            pathname === "/pesquisas" &&
            "relative overflow-clip rounded-lg border !border-white !border-opacity-20 text-orange-500"
          } ${expand && "ml-3"}`}
        >
          {pathname === "/pesquisas" && (
            <div className="absolute inset-0 h-full w-full bg-orange-500 opacity-20 blur-lg"></div>
          )}
          <Link
            href={"/pesquisas"}
            className="flex items-center gap-2 duration-200 hover:text-orange-500"
          >
            <Icon icon="icon-park-outline:ring" width={24} />
            {expand && <span className="text-xs">Rastreio</span>}
          </Link>
        </li>
        <li className={`p-2 ${expand && "ml-3"}`}>
          <button className="flex items-center gap-2 duration-200 hover:text-orange-500">
            <Icon icon="circum:mug-1" width={24} />
            {expand && <span className="text-xs">Pedidos</span>}
          </button>
        </li>
      </ul>
      <button className="bg-orange hover:text-orange-500-500 relative rounded-lg p-2 duration-200">
        <Icon icon="ph:bell-light" width={24} />
      </button>
    </nav>
  );
}
