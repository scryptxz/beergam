"use client";
import Image from "next/image";
import IllustrationBgExplorer from "@/assets/images/pesquisas/illustration-explorer.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProductPesquisas from "@/components/product-pesquisas";

export default function Pesquisas() {
  return (
    <main className="min-h-screen bg-blue-10">
      <section className="mx-auto w-[80%] py-6">
        <h1 className="text-2xl font-bold">Encontre novos catálogos</h1>
        <div className="relative mx-auto mt-10 max-w-[50rem] overflow-clip rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-8 shadow-xl">
          <Image
            src={IllustrationBgExplorer}
            width={300}
            alt=""
            className="pointer-events-none absolute -right-10 -top-2 select-none max-lg:hidden"
          />
          <h2 className="text-3xl font-bold max-lg:text-xl">
            Explorador de catálogos
          </h2>
          <p className="my-2 ml-2 text-gray-500">
            Busque novos catálogos pelo nome do produto desejado
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-[60%] rounded-full py-3 pl-14 pr-6 outline-none max-lg:w-full"
            />
            <button className="absolute left-2 top-2 rounded-full bg-orange-500 p-1.5 text-white">
              <Icon icon="mdi:search" width={18} />
            </button>
          </div>
        </div>
        <ul className="mt-14 flex flex-wrap justify-center gap-8 text-blue-700">
          <li>
            <button className="rounded-full border border-orange-500 bg-blue-600 bg-opacity-70 px-6 py-2 text-white">
              <span className="font-bold">Marca:</span> Apple
            </button>
          </li>
          <li>
            <button className="rounded-full border border-orange-500 !bg-opacity-5 px-6 py-2 hover:bg-blue-600">
              <span className="font-bold">Dual SIM:</span> Não
            </button>
          </li>
          <li>
            <button className="rounded-full border border-orange-500 !bg-opacity-5 px-6 py-2 hover:bg-blue-600">
              <span className="font-bold">Modelo:</span> Iphone 11
            </button>
          </li>
          <li>
            <button className="rounded-full border border-orange-500 !bg-opacity-5 px-6 py-2 hover:bg-blue-600">
              <span className="font-bold">Memória interna:</span> 128GB
            </button>
          </li>
        </ul>
        <div className="my-16 flex flex-wrap justify-center gap-12">
          {Array(8)
            .fill("")
            .map((data, index) => (
              <ProductPesquisas key={index} />
            ))}
        </div>
      </section>
    </main>
  );
}
