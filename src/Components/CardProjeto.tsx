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
    navigate(`/projeto/${_id}`);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={`Capa do projeto`} className="w-full h-auto" />
      <div className="absolute inset-0 bg-black/30" />

      <div className=" absolute bottom-4 right-4 bg-white shadow-md rounded-lg px-4 py-3 custom-div-975 flex items-center justify-between max-sm:w-[85%] sm:w-[76%] md:w-[79%] lg:[76%] h-auto z-10">
        <div className="flex items-center justify-start flex-col gap-[10px]">
          <h1 className="text-black font-bold max-sm:text-[17px] sm:text-[20px] md:text-[17px] lg:text-[20px] w-full">
            {name}
          </h1>
          <div className="flex items-center justify-center gap-[12px]">
            {technologiesUsed.slice(0, 3).map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-fifth"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="custom-img-455 max-sm:w-[33px] max-sm:h-[33px] sm:w-[40px] sm:h-[40px] md:w-[33px] md:h-[33px] lg:w-[40px] lg:h-[40px] object-cover"
                />
                <h3 className="custom-h3-455 max-sm:text-[12px] sm:text-[12px] md:text-[11px] lg:text-[12px] ">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <ArrowButton onClick={handleClick} />
      </div>
    </div>
  );
};
