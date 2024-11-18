"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import NavLogo from "@/assets/images/nav-logo.png";

export default function NavbarMobile() {
  return (
    <nav
      className={`fixed bottom-4 z-10 flex w-full rounded-3xl px-5 py-1.5 text-white sm:hidden`}
    >
      <div className="absolute inset-0 mx-auto max-w-[20rem] rounded-3xl bg-gradient-to-b from-blue-600 to-blue-500 shadow-2xl shadow-black"></div>
      <ul
        className={`text-gray-200 relative flex w-full items-center justify-center gap-8 overflow-y-auto`}
      >
        <li>
          <button className="flex items-center gap-2">
            <Image
              src={NavLogo}
              alt="Avatar"
              width={35}
              className="rounded-full"
            />
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Icon icon="ph:house-light" width={24} />
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Icon icon="ph:bag-light" width={24} />
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Icon icon="ph:chart-line-light" width={24} />
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Icon icon="circum:mug-1" width={24} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
