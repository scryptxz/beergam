import Image from "next/image";
import IllustrationBg from "@/assets/images/pesquisas/illustration-explorer.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Pesquisas() {
  return (
    <main className="bg-blue-10 min-h-screen">
      <section className="mx-auto w-[80%] py-6">
        <h1 className="text-2xl font-bold">Encontre novos catálogos</h1>
        <div className="to-gray-200 relative mx-auto w-[50rem] overflow-clip rounded-3xl bg-gradient-to-br from-gray-100 p-8 shadow-xl">
          <Image
            src={IllustrationBg}
            width={300}
            alt=""
            className="absolute -right-10 -top-2"
          />
          <h2 className="text-3xl font-bold">Explorador de catálogos</h2>
          <p className="my-2 ml-2 text-gray-500">
            Busque novos catálogos pelo nome do produto desejado
          </p>
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-[60%] rounded-full py-3 pl-14 pr-6 outline-none"
          />
          <button className="absolute left-11 top-[116px] rounded-full bg-orange-500 p-1.5 text-white">
            <Icon icon="mdi:search" width={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
