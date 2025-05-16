import { useNavigate } from "react-router-dom";
import ArrowButton from "../Components/ArrowButton";

interface Tecnologia {
  name: string;
  image: string;
}

interface CardProjetoProps {
  _id: string;
  name: string;
  image: string;
  technologiesUsed: Tecnologia[];
}

export const CardProjeto = ({
  _id,
  name,
  image,
  technologiesUsed,
}: CardProjetoProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projeto/${_id}`); // envia para a rota com o id
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={`Capa do projeto`} className="w-full h-auto" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-4 right-4 bg-white shadow-md rounded-lg px-4 py-3 flex items-center justify-between w-[76%] h-auto gap-[20px] z-10">
        <div className="flex items-center justify-start flex-col gap-[10px]">
          <h1 className="text-black font-bold text-[20px] w-full">{name}</h1>
          <div className="flex items-center justify-center gap-[12px]">
            {technologiesUsed.slice(0, 3).map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-fifth"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-[40px] h-[40px] object-cover"
                />
                <h3 className="text-[12px]">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <ArrowButton onClick={handleClick} />
      </div>
    </div>
  );
};
