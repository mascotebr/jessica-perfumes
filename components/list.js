import Link from "next/link";
import { motion } from "motion/react";
import { listaFemininos, listaMasculinos } from "./data";
export default function List() {
  const wame =
    "https://wa.me/5515996948425?text=Olá, me interresei pelo perfume ";

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.075,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => {
      const baseDelay = i * 0.25;

      return {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
          delay: baseDelay,
        },
      };
    },
  };
  const card = (item, index) => {
    return (
      <motion.div
        key={item.nome}
        className="card"
        variants={itemVariants}
        custom={index}
      >
        <Link href={`${wame}${item.nome}`}>
          <div>
            <img src={item.foto} alt={item.nome} />
            <h2>{item.nome}</h2>
          </div>
          <div className="p">R${item.preco}</div>
        </Link>
      </motion.div>
    );
  };
  return (
    <section>
      <h1 className="blue">Masculinos</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="list"
      >
        {listaMasculinos.map(card)}
      </motion.div>
      <h1 className="pink">Femininos</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="list"
      >
        {listaFemininos.map(card)}
      </motion.div>
    </section>
  );
}
