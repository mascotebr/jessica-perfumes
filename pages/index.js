import Link from "next/link";
import List from "../components/list";

function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <title>Jessica - Perfumes</title>
      </head>
      <body>
        <div className="center" style={{ width: "100%" }}>
          <Link className="title" href={"https://wa.me/5515996948425"}>
            Jéssica <br />
            Perfumes Inspirados
          </Link>
        </div>
        <List />
        <small>
          Todos os perfumes são inspirados nesses perfumes exibidos, com uma
          caixa padrão para todos
        </small>
      </body>
    </html>
  );
}

export default Home;
