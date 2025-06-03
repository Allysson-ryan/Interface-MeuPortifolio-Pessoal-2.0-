import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import Title from "../Utils/Title";
import { CardProjeto } from "../Components/CardProjeto";
import { ArrowRight } from "@phosphor-icons/react";

interface Projeto {
  _id: string;
  name: string;
  image: string;
  technologiesUsed: string[];
}

interface Tecnologia {
  name: string;
  image: string;
}

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);

  useEffect(() => {
    api
      .get("/projetos")
      .then((response) => setProjetos(response.data))
      .catch((error) => console.error("Erro ao buscar projetos:", error));

    api
      .get("/tecnologias")
      .then((response) => setTecnologias(response.data))
      .catch((error) => console.error("Erro ao buscar tecnologias:", error));
  }, []);
  const getTecnologiasDoProjeto = (technologiesUsed: string[]) => {
    return tecnologias.filter((tech) => technologiesUsed.includes(tech.name));
  };

  return (
    <main className="p-8 gap-6 mb-[50px]">
      <div className="flex items-center justify-center flex-col mt-10">
        <Title className="text-primary">Projetos</Title>
        <p className="max-sm:w-[85%] sm:w-[90%] md:w-[80%] text-center font-secondary text-fifth">
          Explore minha coleção de projetos e veja na prática minha
          experiência...
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center w-[100%]">
        <div className="grid sm:grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 grid-cols-2 custom-div-910 w-[90%] max-sm:p-0 sm:p-[30px] md:p-[15px] lgp-[30px] gap-6">
          {projetos.map((projeto) => (
            <CardProjeto
              key={projeto._id}
              _id={projeto._id}
              name={projeto.name}
              image={projeto.image}
              technologiesUsed={getTecnologiasDoProjeto(
                projeto.technologiesUsed
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-[70px]">
        <button
          type="button"
          onClick={() => navigate("/projetos")}
          className="max-sm:w-[12rem] md:w-[15rem] flex items-center justify-center gap-2 p-3 rounded-[35px] border border-text-primary bg-background hover:scale-115 transition-transform"
        >
          <p className="max-sm:text-[15px] md:text-[17px] text-primary">
            Ver Todos Projetos
          </p>
          <ArrowRight size={30} className="text-primary" />
        </button>
      </div>
    </main>
  );
};

export default ProjectsSection;
