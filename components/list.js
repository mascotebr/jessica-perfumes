import Link from "next/link";

export default function List() {
  const listaMasculinos = [
    {
      nome: "LaurPolo Green ent",
      foto: "",
      preco: 120.0,
    },
    {
      nome: "Sauvage",
      foto: "",
      preco: 120.0,
    },
    {
      nome: "Invictus",
      foto: "",
      preco: 120.0,
    },
    {
      nome: "Scandal masculino",
      foto: "",
      preco: 120.0,
    },
    {
      nome: "Creed advento ",
      foto: "",
      preco: 120.0,
    },
    {
      nome: "Bleu de chanel",
      foto: "",
      preco: 120.0,
    },
  ];

  const listaFemininos = [
    {
      nome: "La vie est belle ",
      foto: "",
      preco: 120.0,
    },
    {
      nome: "La nuit tresor",
      foto: "",
      preco: 120.0,
    },
  ];
  return (
    <>
      <div className="center" style={{ width: "100%" }}>
        <Link href={"https://wa.me/5515996948425"}>Jéssica Perfumes</Link>
      </div>
      <h1 className="blue">Perfumes Inspirados Masculinos</h1>
      <section className="list">
        {listaMasculinos.map((item) => (
          <div key={item.nome} className="card">
            <h2>{item.nome}</h2>
            <p>
              <span>R$</span> <span>{item.preco}</span>
            </p>
          </div>
        ))}
      </section>
      <h1 className="pink">Perfumes Inspirados Femininos</h1>
      <section className="list">
        {listaFemininos.map((item) => (
          <div key={item.nome} className="card">
            {/* <img src={item.foto} width={200} height={250} alt={item.nome} /> */}
            <h2>{item.nome}</h2>
            <p>
              <span>R$</span> <span>{item.preco}</span>
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
