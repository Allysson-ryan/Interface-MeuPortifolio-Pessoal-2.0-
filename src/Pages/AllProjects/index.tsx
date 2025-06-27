import { useEffect, useState } from "react";
import api from "../../Services/api";
import Header from "../../Components/Header/Index";
import { CardProjeto } from "../../Components/CardProjeto";

interface Tecnologia {
  name: string;
  image: string;
}

interface Projeto {
  _id: string;
  name: string;
  image: string;
  technologiesUsed: string[];
}

const AllProjects = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProjetos, resTecnologias] = await Promise.all([
          api.get("/projetos/todos"),
          api.get("/tecnologias"),
        ]);

        const projetosOrdenados = resProjetos.data.sort(
          (
            a: Projeto & { createdAt: string },
            b: Projeto & { createdAt: string }
          ) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setProjetos(projetosOrdenados);
        setTecnologias(resTecnologias.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[100%] pt-[64px]">
      <Header showProjectsLink={false} />

      <div className="mt-10 flex items-center justify-center w-[100%]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-[75%] sm:w-[85%] max-sm:p-[15px] sm:p-[50px] md:p-[20px] gap-6">
          {projetos.map((projeto) => {
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
