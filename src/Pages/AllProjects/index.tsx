import { useEffect, useState } from "react";
import api from "../../Services/api";
import Header from "../../Components/Header/Index";
import { CardProjeto } from "../../Components/CardProjeto";
import { FunnelSimple } from "@phosphor-icons/react";

interface Tecnologia {
  name: string;
  image: string;
}

interface Projeto {
  _id: string;
  name: string;
  image: string;
  technologiesUsed: string[];
  category: "Frontend" | "Backend";
  updatedAt: string;
  client?: boolean;
}

type Filtro = "Todos" | "Frontend" | "Backend" | "Clientes" | string;

const AllProjects = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProjetos, resTecnologias] = await Promise.all([
          api.get("/projetos/todos"),
          api.get("/tecnologias"),
        ]);

        const projetosOrdenados = resProjetos.data.sort(
          (
            a: Projeto & { updatedAt: string },
            b: Projeto & { updatedAt: string }
          ) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );

        setProjetos(projetosOrdenados);
        setTecnologias(resTecnologias.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const anos = Array.from(
    new Set(projetos.map((p) => new Date(p.updatedAt).getFullYear().toString()))
  ).sort((a, b) => Number(b) - Number(a));

  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : filtro === "Frontend" || filtro === "Backend"
      ? projetos.filter((p) => p.category === filtro)
      : filtro === "Clientes"
      ? projetos.filter((p) => p.client === true)
      : projetos.filter(
          (p) => new Date(p.updatedAt).getFullYear().toString() === filtro
        );

  return (
    <div className="w-full pt-[64px]">
      <Header showProjectsLink={false} />

      {/* Filtros */}
      <div className="mt-[60px] w-full flex flex-col gap-3 px-4 max-sm:px-[30px] sm:px-[100px] lg:px-[16%]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-textPrimary font-semibold">Filtros</span>
            <FunnelSimple size={18} className="text-textPrimary" />
          </div>

          {filtro !== "Todos" && (
            <button
              className="text-accent text-sm font-medium sm:ml-[32%] md:ml-[20%] lg:ml-[15%] cursor-pointer underline transition-colors duration-200"
              onClick={() => setFiltro("Todos")}
            >
              Apagar filtros
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {["Todos", "Frontend", "Backend", "Clientes"].map((f) => (
            <button
              key={f}
              className={`px-4 py-1 cursor-pointer rounded-full border text-sm transition-colors duration-200
                ${
                  filtro === f
                    ? "bg-accent text-textThird border-accent"
                    : "border-textPrimary text-textPrimary bg-transparent"
                }`}
              onClick={() => setFiltro(f)}
            >
              {f}
            </button>
          ))}

          {/* Select de anos */}
          <select
            className={`px-4 py-1 rounded-full border text-sm cursor-pointer transition-colors duration-200
              ${
                anos.includes(filtro)
                  ? "bg-accent "
                  : "border-textPrimary text-textPrimary bg-transparent"
              }`}
            value={anos.includes(filtro) ? filtro : ""}
            onChange={(e) => setFiltro(e.target.value || "Todos")}
          >
            <option value="" disabled>
              Anos
            </option>
            {anos.map((ano) => (
              <option key={ano} value={ano} className="text-fifth">
                {ano}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de projetos */}
      <div className="mt-6 flex items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-[75%] sm:w-[85%] max-sm:p-[15px] sm:p-[50px] md:p-[20px] gap-6">
          {projetosFiltrados.map((projeto) => {
            const tecnologiasProjeto = tecnologias.filter((tec) =>
              projeto.technologiesUsed.includes(tec.name)
            );

            return (
              <CardProjeto
                key={projeto._id}
                _id={projeto._id}
                name={projeto.name}
                image={projeto.image}
                technologiesUsed={tecnologiasProjeto}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
