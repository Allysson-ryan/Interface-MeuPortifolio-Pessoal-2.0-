import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../Services/api";
import Header from "../../Components/Header/Index";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";

interface Projeto {
  name: string;
  description: string;
  category: string;
  image: string;
  video: string;
  fluxogramaImg: string;
  githubLink: string;
  deploiLink: string;
  technologiesUsed: string[];
  createdAt: string;
  updatedAt: string;
}

const DetailsProjects = () => {
  const { id } = useParams();
  const [projeto, setProjeto] = useState<Projeto | null>(null);

  useEffect(() => {
    async function fetchProjeto() {
      try {
        const response = await api.get(`/projetos/${id}`);
        setProjeto(response.data);
      } catch (error) {
        console.error("Erro ao buscar projeto:", error);
      }
    }

    fetchProjeto();
  }, [id]);

  function formatYoutubeEmbedUrl(url: string): string {
    const videoIdRegex =
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/;
    const match = url.match(videoIdRegex);
    const videoId = match?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  }

  if (!projeto) return <div className="text-center p-10">Carregando...</div>;

  return (
    <div className="bg-background min-h-screen text-primary mt-10">
      <Header showNavigation={false} />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <nav className="text-sm text-fifth mb-6">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-1 text-primary">/</span>
          <Link to="/projetos" className="hover:text-accent">
            Todos os projetos
          </Link>
          <span className="mx-1 text-primary">/</span>
          <span className="text-accent">{projeto.name}</span>
        </nav>

        <div className="w-full h-[400px] md:h-[500px] mb-8">
          {(() => {
            const categoria = projeto.category?.toLowerCase();

            if (
              (categoria === "frontend" || categoria === "fullstack") &&
              projeto.video
            ) {
              return (
                <iframe
                  className="w-full h-full rounded-md"
                  src={formatYoutubeEmbedUrl(projeto.video)}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              );
            }

            if (categoria === "backend" && projeto.fluxogramaImg) {
              return (
                <img
                  src={projeto.fluxogramaImg}
                  alt="Fluxograma da API"
                  className="w-full h-full object-contain rounded-md border"
                />
              );
            }

            return (
              <p className="text-center text-sm text-fifth">
                Nenhuma mídia disponível para esta categoria.
              </p>
            );
          })()}
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold ">{projeto.name}</h1>
              <span className="text-sm text-secondary">
                {new Date(projeto.createdAt).toLocaleDateString()} -{" "}
                {new Date(projeto.updatedAt).toLocaleDateString()}
              </span>
            </div>

            <h2 className="text-sm text-fifth mb-2">Descrição</h2>
            <p className="text-sm text-textSecondary mb-7">
              {projeto.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={projeto.githubLink}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-button text-third py-2 px-6 rounded-md hover:bg-fifth"
              >
                <GithubLogo size={20} weight="bold" />
                código no github
              </a>
              {projeto.deploiLink && projeto.deploiLink.trim() !== "" && (
                <a
                  href={projeto.deploiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-textFifth py-2 px-6 rounded-md hover:bg-gray"
                >
                  ver funcionando
                  <ArrowSquareOut size={16} weight="bold" />
                </a>
              )}
            </div>
          </div>

          <div className="max-sm:border-0 sm:border-0 md:border-l border-Fifth pl-6 pt-10">
            <h3 className="text-sm text-fifth mb-4">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-4">
              {projeto.technologiesUsed.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-fifth text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProjects;
