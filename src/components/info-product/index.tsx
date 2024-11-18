import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

import Chart from "@/assets/images/info-product/chart.png";
import "animate.css";
import PriceInfo from "../price-info";
import { useState } from "react";

type ProductInfoTypes = {
  main_image: StaticImageData;
  title: string;
  alert: string;
  shop: string;
  price: number;
  announces: number;
  description: string;
};

type InfoProductProps = {
  setShowInfo: (show: boolean) => void;
  product_info: ProductInfoTypes;
};

export default function InfoProduct(props: InfoProductProps) {
  const { setShowInfo, product_info } = props;

  // Quando o usuário apertar a tecla ESC, fechar a janela
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setShowInfo(false);
    }
  });

  const [showPriceInfo, setShowPriceIndo] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={() => {
        setShowInfo(false);
      }}
    >
      <div
        className="animate__animated animate__zoomIn animate__faster relative m-12 flex h-[80vh] flex-wrap items-center justify-center gap-y-20 overflow-y-auto rounded-3xl bg-white px-10 py-16 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -left-48 -top-48 -z-10 h-[35rem] w-[35rem] rounded-full bg-orange-300 opacity-15 blur-3xl"></div>
        <button
          className="absolute right-6 top-4 text-orange-500"
          onClick={() => setShowInfo(false)}
        >
          <Icon icon="mdi:window-close" width={40} />
        </button>
        <div className="flex flex-col gap-5 rounded-xl bg-white p-4 shadow-xl">
          <div className="relative flex items-center justify-start rounded-xl border-2 border-purple-light p-5 shadow-lg shadow-purple-light">
            <Image
              src={product_info.main_image}
              alt="Controle de Xbox"
              width={300}
              className="origin-bottom-left duration-300"
            />
          </div>
          {showPriceInfo && <PriceInfo />}
          <span className="flex items-center gap-2 self-end rounded-full bg-gray-50 p-2 text-lg font-bold text-blue-400">
            <button onClick={() => setShowPriceIndo(!showPriceInfo)}>
              <Icon icon="mdi:information-outline" width={20} />
            </button>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product_info.price)}
          </span>
          <h2 className="text-xl font-bold">{product_info.title}</h2>
          <p className="font-semibold text-blue-400">
            {product_info.alert}
            <span className="text-gray-500"> | {product_info.shop}</span>
          </p>
          <div className="relative flex items-center justify-between text-orange-500">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gray-50 p-2">
                <Icon icon="mdi:search" width={20} className="text-gray-500" />
              </span>
              <Icon icon="clarity:building-line" width={20} />
              <span>{product_info.announces} anúncios</span>
            </div>
            <Icon icon="mdi:heart-outline" width={25} />
          </div>
        </div>
        <div className="ml-20 flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-y-20 max-lg:justify-center">
            <div className="w-96 leading-8">
              <h1 className="text-3xl font-bold">Descrição</h1>
              <p className="mb-4 text-gray-500">{product_info.description}</p>
            </div>
            <div className="text-lg">
              <div className="relative overflow-clip rounded-xl px-9 py-3 shadow-md shadow-purple-light">
                <div className="absolute -left-6 top-0 h-full w-12 bg-orange-500"></div>
                <div className="flex items-center gap-2 text-green-600">
                  <span className="font-semibold text-black">100mil+</span>
                  <Icon
                    icon="mdi:arrow-up-thin"
                    width={25}
                    className="inline"
                  />
                  <span>1.000%</span>
                </div>
                <p className="text-base text-gray-500">Volume de pesquisa</p>
              </div>
              <div className="relative mt-10 overflow-clip rounded-xl px-9 py-3 shadow-md shadow-purple-light">
                <div className="absolute -left-6 top-0 h-full w-12 bg-orange-500"></div>
                <div className="flex items-center gap-2 text-green-600">
                  <span className="font-semibold text-black">Há 20 horas</span>
                  <Icon icon="uil:arrow-growth" width={20} className="inline" />
                  <span>Ativa</span>
                </div>
                <p className="text-base text-gray-500">Volume de pesquisa</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between font-bold text-blue-400">
              <h2>DETALHAMENTO DA TENDÊNCIA</h2>
              <div className="flex gap-2">
                <button className="text-gray-500">SEMANA</button>
                <button>HORAS</button>
              </div>
            </div>
            <Image src={Chart} alt="Gráfico" />
          </div>
        </div>
      </div>
    </div>
  );
}
