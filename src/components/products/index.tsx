import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

import XboxController from "@/assets/images/products/controle-xbox.png";
import Bicycle from "@/assets/images/products/green-bike.png";
import Basketball from "@/assets/images/products/basketball.png";
import GymBike from "@/assets/images/products/gym-bike.png";
import Nike from "@/assets/images/products/nike.png";
import Escova from "@/assets/images/products/escova.png";
import Drill from "@/assets/images/products/drill.png";
import Buds from "@/assets/images/products/bluetooth-buds.png";

type ProductsTypes = {
  main_image: StaticImageData;
  preview_images: StaticImageData[];
  title: string;
  alert: string;
  shop: string;
  price: number;
  announces: number;
};

type ProductsTypesCategory = {
  mais_cresceram: ProductsTypes[];
  mais_desejadas: ProductsTypes[];
  mais_populares: ProductsTypes[];
  favoritos: ProductsTypes[];
};

type ProductsProps = {
  productsCategory: string | null;
  title: string;
  title_icon: string;
};

export default function Products(props: ProductsProps) {
  const { productsCategory, title, title_icon } = props;
  const products: ProductsTypesCategory = {
    mais_cresceram: [
      {
        main_image: XboxController,
        preview_images: [XboxController, XboxController, XboxController],
        title: "Controle Xbox Series S - Sem fio",
        alert: "1º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 425.0,
        announces: 869,
      },
      {
        main_image: Bicycle,
        preview_images: [Bicycle, Bicycle, Bicycle],
        title: "Bicicleta Aro 29",
        alert: "2º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 900.0,
        announces: 357,
      },
      {
        main_image: Basketball,
        preview_images: [Basketball, Basketball, Basketball],
        title: "Bola De Basquetebol T7",
        alert: "3º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 130.0,
        announces: 654,
      },
      {
        main_image: GymBike,
        preview_images: [GymBike, GymBike, GymBike],
        title: "Bicicleta Ergométrica",
        alert: "4º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 425.0,
        announces: 223,
      },
    ],
    mais_desejadas: [
      {
        main_image: Nike,
        preview_images: [Nike, Nike, Nike],
        title: "Nike mercurial",
        alert: "2º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 900.0,
        announces: 954,
      },
      {
        main_image: XboxController,
        preview_images: [XboxController, XboxController, XboxController],
        title: "Controle Xbox Series S - Sem fio",
        alert: "1º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 425.0,
        announces: 869,
      },
      {
        main_image: GymBike,
        preview_images: [GymBike, GymBike, GymBike],
        title: "Bicicleta Ergométrica",
        alert: "4º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 425.0,
        announces: 223,
      },
      {
        main_image: Basketball,
        preview_images: [Basketball, Basketball, Basketball],
        title: "Bola De Basquetebol T7",
        alert: "3º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 130.0,
        announces: 654,
      },
    ],
    mais_populares: [
      {
        main_image: Basketball,
        preview_images: [Basketball, Basketball, Basketball],
        title: "Bola De Basquetebol T7",
        alert: "3º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 130.0,
        announces: 654,
      },
      {
        main_image: Bicycle,
        preview_images: [Bicycle, Bicycle, Bicycle],
        title: "Bicicleta Aro 29",
        alert: "2º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 900.0,
        announces: 357,
      },
      {
        main_image: Escova,
        preview_images: [Escova, Escova, Escova],
        title: "Escova Secadora Bec07r - Soft 4",
        alert: "7º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 105.0,
        announces: 219,
      },
      {
        main_image: GymBike,
        preview_images: [GymBike, GymBike, GymBike],
        title: "Bicicleta Ergométrica",
        alert: "4º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 425.0,
        announces: 223,
      },
    ],
    favoritos: [
      {
        main_image: XboxController,
        preview_images: [XboxController, XboxController, XboxController],
        title: "Controle Xbox Series S - Sem fio",
        alert: "1º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 425.0,
        announces: 869,
      },
      {
        main_image: Bicycle,
        preview_images: [Bicycle, Bicycle, Bicycle],
        title: "Bicicleta Aro 29",
        alert: "2º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 900.0,
        announces: 357,
      },
      {
        main_image: Drill,
        preview_images: [Drill, Drill, Drill],
        title: "Furadeira parafusadeira sem fio",
        alert: "6º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 169.0,
        announces: 357,
      },
      {
        main_image: Buds,
        preview_images: [Buds, Buds, Buds],
        title: "Fone Bluetooth - 3ª Geração",
        alert: "8º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 31.0,
        announces: 432,
      },
      {
        main_image: GymBike,
        preview_images: [GymBike, GymBike, GymBike],
        title: "Bicicleta Ergométrica",
        alert: "4º MAIOR CRESCIMENTO",
        shop: "Mercado Livre",
        price: 425.0,
        announces: 223,
      },
    ],
  };
  return (
    <section className="mt-32 w-full text-black">
      <h2 className="mb-10 text-2xl font-bold">
        {title}
        <Icon
          icon={title_icon}
          width={30}
          className="ml-2 inline align-middle text-gray-100"
        />
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-10 max-lg:justify-center">
        {products[productsCategory as keyof ProductsTypesCategory].map(
          (data, index) => (
            <div
              className="group flex h-[27rem] w-[23rem] flex-col justify-between rounded-xl bg-white p-4 shadow-xl"
              key={index}
            >
              <div className="relative flex h-40 w-80 items-center justify-start rounded-xl border-2 border-purple-light p-5 shadow-lg shadow-purple-light">
                <Image
                  src={data.main_image}
                  width={150}
                  alt="Controle de Xbox"
                  className="origin-bottom-left duration-300 group-hover:scale-105"
                />
                <div className="absolute right-2 top-0 flex flex-col">
                  <button className="relative size-14 overflow-hidden rounded-full border border-gray-100 bg-white">
                    <Image
                      src={data.preview_images[0]}
                      alt="Controle de Xbox"
                    />
                  </button>
                  <button className="relative -top-2 size-16 overflow-hidden rounded-full border border-gray-100 bg-white">
                    <Image
                      src={data.preview_images[1]}
                      alt="Controle de Xbox"
                      className="absolute top-2 scale-125"
                    />
                  </button>
                  <button className="relative -top-4 size-14 overflow-hidden rounded-full border border-gray-100 bg-white">
                    <Image
                      src={data.preview_images[2]}
                      alt="Controle de Xbox"
                      className="absolute top-2 scale-125"
                    />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold">{data.title}</h3>
              <p className="font-semibold text-blue-400">
                {data.alert}{" "}
                <span className="text-gray-500">| {data.shop}</span>
              </p>
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-gray-50 p-2">
                  <Icon
                    icon="mdi:information"
                    width={20}
                    className="text-gray-500"
                  />
                </span>
                <span className="rounded-full bg-gray-50 p-2">
                  <Icon
                    icon="mdi:search"
                    width={20}
                    className="text-gray-500"
                  />
                </span>
                <span className="rounded-full bg-gray-50 p-2 font-semibold text-blue-400">
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
              <button className="mt-4 rounded-xl border border-orange-500 py-2 text-orange-500 duration-200 hover:bg-orange-500 hover:text-white">
                Saiba mais
              </button>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
