import { Link } from "react-router-dom";
import { House } from "@phosphor-icons/react";
import Header from "../../Components/Header/Index";

export default function Agradecimento() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <Header showNavigation={false} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-secondary text-primary mb-2">
        Agradeço por entrar em contato
      </h1>
      <p className="text-secondary text-sm sm:text-base mb-6">
        Em breve, retornarei com uma resposta
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md text-sm sm:text-base text-primary border border-gray transition hover:scale-105 hover:shadow-lg hover:bg-gray"
      >
        <House size={18} className="text-primary" />
        <h1 className="text-primary">voltar para home</h1>
      </Link>
    </main>
  );
}
