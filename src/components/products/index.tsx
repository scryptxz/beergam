import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

import XboxController from "@/assets/images/products/controle-xbox.png";
import Bicycle from "@/assets/images/products/green-bike.png";
import Basketball from "@/assets/images/products/basketball.png";
import GymBike from "@/assets/images/products/gym-bike.png";

type ProductsTypes = {
  main_image: StaticImageData;
  preview_images: StaticImageData[];
  title: string;
  alert: string;
  shop: string;
  price: number;
  announces: number;
};

export default function Products() {
  const products: ProductsTypes[] = [
    {
      main_image: XboxController,
      preview_images: [XboxController, XboxController, XboxController],
      title: "Controle Xbox Series S - Sem fio",
      alert: "1º MAIOR CRESCIMENTO",
      shop: "Mercado Livre",
      price: 425.00,
      announces: 869,
    },
    {
      main_image: Bicycle,
      preview_images: [Bicycle, Bicycle, Bicycle],
      title: "Bicicleta Aro 29",
      alert: "2º MAIOR CRESCIMENTO",
      shop: "Mercado Livre",
      price: 900.00,
      announces: 357,
    },
    {
      main_image: Basketball,
      preview_images: [Basketball, Basketball, Basketball],
      title: "Bola De Basquetebol T7",
      alert: "3º MAIOR CRESCIMENTO",
      shop: "Mercado Livre",
      price: 130.00,
      announces: 654,
    },
    {
      main_image: GymBike,
      preview_images: [GymBike, GymBike, GymBike],
      title: "Bicicleta Ergométrica",
      alert: "4º MAIOR CRESCIMENTO",
      shop: "Mercado Livre",
      price: 425.00,
      announces: 223,
    },
  ];
  return (
    <section className="w-[85%] mx-auto mt-80">
      <h2 className="font-bold text-2xl mb-12">As buscas que mais cresceram <Icon icon="mdi:information-outline" width={30} className="inline align-middle text-gray-100" /></h2>
      <div className="flex items-center justify-between flex-wrap gap-y-10 gap-x-5 max-lg:justify-center">
          {products.map((data, index) => (
            <div
              className="group flex flex-col justify-between p-4 bg-white shadow-xl rounded-xl w-[23rem] h-[27rem]"
              key={index}>
              <div className="flex items-center justify-start relative p-5 rounded-xl shadow-lg border-2 border-purple-light shadow-purple-light w-80 h-40">
                <Image src={data.main_image} width={150} alt="Controle de Xbox" className="origin-bottom-left group-hover:scale-105 duration-300" />
                <div className="flex flex-col absolute top-0 right-2">
                  <button className="relative size-14 rounded-full overflow-hidden border border-gray-100  bg-white">
                    <Image
                      src={data.preview_images[0]}
                      alt="Controle de Xbox"
                    />
                  </button>
                  <button className="relative -top-2 size-16 rounded-full overflow-hidden border border-gray-100  bg-white">
                    <Image
                      src={data.preview_images[1]}
                      alt="Controle de Xbox"
                      className="absolute top-2 scale-125"
                    />
                  </button>
                  <button className="relative -top-4 size-14 rounded-full overflow-hidden border border-gray-100  bg-white">
                    <Image
                      src={data.preview_images[2]}
                      alt="Controle de Xbox"
                      className="absolute top-2 scale-125"
                    />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-lg">{data.title}</h3>
              <p className="text-blue-400 font-semibold">
                {data.alert} <span className="text-gray-500">| {data.shop}</span>
              </p>
              <div className="flex items-center gap-4">
                <span className="p-2 bg-gray-50 rounded-full">
                  <Icon
                    icon="mdi:information"
                    width={20}
                    className="text-gray-500"
                  />
                </span>
                <span className="p-2 bg-gray-50 rounded-full">
                  <Icon icon="mdi:search" width={20} className="text-gray-500" />
                </span>
                <span className="text-blue-400 p-2 bg-gray-50 rounded-full font-semibold">
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "BRL",
                  }).format(data.price)}
                </span>
              </div>
              <div className="flex justify-between text-orange-500">
                <div className="flex items-center gap-2">
                  <Icon icon="clarity:building-line" width={20} />
                  <span>{data.announces} anúncios</span>
                </div>
                <Icon icon="mdi:heart-outline" width={25} />
              </div>
              <button className="text-orange-500 border border-orange-500 py-2 mt-4 rounded-xl hover:bg-orange-500 hover:text-white duration-200">Saiba mais</button>
            </div>
          ))}
      </div>
    </section>
  );
}
