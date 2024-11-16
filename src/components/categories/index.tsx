import { Icon } from "@iconify/react/dist/iconify.js";

type CategoriesTypes = {
    icon: string;
    text: string;
}

export default function Categories() {
  const categories: CategoriesTypes[] = [
    {
      icon: "mdi:audio",
      text: "Eletrônicos, Áudio e Vídeo",
    },
    {
      icon: "mdi:food",
      text: "Alimentos e Bebidas",
    },
    {
      icon: "mdi:puzzle",
      text: "Brinquedos",
    },
    {
      icon: "mdi:hourglass",
      text: "Antiguidades",
    },
    {
      icon: "mdi:cellphone-text",
      text: "Celulares e Telefones",
    },
    {
      icon: "mdi:tractor-variant",
      text: "Agro",
    },
    {
      icon: "mdi:cat",
      text: "Animais",
    },
    {
      icon: "mdi:car",
      text: "Carros, Motos, e Outros",
    },
    {
      icon: "mdi:stroller",
      text: "Bebês",
    },
    {
      icon: "mdi:palette",
      text: "Arte, Papelaria e Armarinho",
    },
    {
      icon: "material-symbols:health-and-beauty",
      text: "Beleza e Cuidado Pessoal",
    },
    {
      icon: "mdi:tshirt-v",
      text: "Calçados, Roupas e Bolsas",
    },
    {
      icon: "mdi:lamp",
      text: "Casa, Móveis e Decoração",
    },
    {
      icon: "mdi:account-hard-hat",
      text: "Construção",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center mx-auto gap-10 w-[85%] my-36">
      {categories.map((data, index) => (
        <div className="flex flex-col items-center justify-center bg-white text-center gap-2 w-48 h-32 rounded-xl border-2 border-blue-500 border-opacity-10 shadow-lg p-5 shadow-purple-light hover:bg-blue-50 cursor-pointer hover:-translate-y-1 duration-200" key={index}>
          <i className="p-2 bg-green-50 rounded-full">
            <Icon icon={data.icon} width={30} className="text-blue-400" />
          </i>
          <h2 className="font-bold">{data.text}</h2>
        </div>
      ))}
    </section>
  );
}
