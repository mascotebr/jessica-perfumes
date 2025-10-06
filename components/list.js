import Link from "next/link";

export default function List() {
  const wame =
    "https://wa.me/5515996948425?text=Olá, me interresei pelo perfume ";
  const listaMasculinos = [
    {
      nome: "LaurPolo Green Ent",
      foto: "/laurPoloGreenent.png",
      preco: 120.0,
    },
    {
      nome: "Sauvage",
      foto: "/sauvage.png",
      preco: 120.0,
    },
    {
      nome: "Invictus",
      foto: "/invictus.webp",
      preco: 120.0,
    },
    {
      nome: "Scandal",
      foto: "/scandal.webp",
      preco: 120.0,
    },
    {
      nome: "Creed Advento",
      foto: "/creedadvento.webp",
      preco: 120.0,
    },
    {
      nome: "Bleu de chanel",
      foto: "/bleuchanel.jpg",
      preco: 120.0,
    },
  ];

  const listaFemininos = [
    {
      nome: "La vie est belle ",
      foto: "/lavieestbelle.webp",
      preco: 120.0,
    },
    {
      nome: "La nuit tresor",
      foto: "/lanuittresor.jpg",
      preco: 120.0,
    },
  ];

  const card = (item) => {
    return (
      <div key={item.nome} className="card">
        <Link href={`${wame}${item.nome}`}>
          <div>
            <img src={item.foto} alt={item.nome} />
            <h2>{item.nome}</h2>
          </div>
          <div className="p">R${item.preco}</div>
        </Link>
      </div>
    );
  };
  return (
    <>
      <h1 className="blue">Masculinos</h1>
      <section className="list">{listaMasculinos.map(card)}</section>
      <h1 className="pink">Femininos</h1>
      <section className="list">{listaFemininos.map(card)}</section>
    </>
  );
}
