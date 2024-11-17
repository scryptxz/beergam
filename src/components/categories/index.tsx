import { Icon } from "@iconify/react/dist/iconify.js";

type CategoriesTypes = {
  icon: string;
  text: string;
};

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
    <section className="mx-auto my-36 flex w-[85%] flex-wrap justify-center gap-10">
      {categories.map((data, index) => (
        <div
          className="flex h-32 w-48 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-blue-500 border-opacity-10 bg-white p-5 text-center shadow-lg shadow-purple-light duration-200 hover:-translate-y-1 hover:bg-blue-50"
          key={index}
        >
          <i className="rounded-full bg-green-50 p-2">
            <Icon icon={data.icon} width={30} className="text-blue-400" />
          </i>
          <h2 className="font-bold">{data.text}</h2>
        </div>
      ))}
    </section>
  );
}
