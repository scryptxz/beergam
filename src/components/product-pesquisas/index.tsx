import Image from "next/image";
import Iphone from "@/assets/images/pesquisas/iphone.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductPesquisas() {
  return (
    <div className="text-blue-700 shadow-3xl group z-10 flex cursor-pointer flex-col gap-3 rounded-xl p-5 backdrop-blur">
      <div className="relative h-[17rem] w-full overflow-clip rounded-xl bg-white px-5">
        <Icon
          icon="circum:bookmark-plus"
          width={40}
          className="absolute right-2 top-2 text-orange-500"
        />
        <Image
          src={Iphone}
          alt=""
          width={130}
          className="relative w-full duration-200 group-hover:-translate-y-6"
        />
      </div>
      <h2 className="font-bold text-orange-500">
        Apple iPhone 11 (128 GB) - Preto
      </h2>
      <div className="flex justify-between font-bold">
        <h3>Preço médio</h3>
        <h3>R$2045.12</h3>
      </div>
      <div className="flex justify-between">
        <span className="relative -top-2">dos concorrentes</span>
        <span className="text-red-500 font-semibold">-12.45%</span>
      </div>
    </div>
  );
}
