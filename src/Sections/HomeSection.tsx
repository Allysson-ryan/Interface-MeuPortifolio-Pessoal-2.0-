import User from "../assets/user.png";
import GithubLogo from "../assets/githubLogoWhite.svg";
import { DownloadSimple } from "@phosphor-icons/react";

const HomeSection = () => {
  return (
    <main className="p-8 w-[100%] h-[100vh]">
      <div className="flex items-center justify-center flex-col mt-5">
        <div>
          <img
            src={User}
            alt="User"
            className="max-sm:w-23 max-sm:h-23 sm:w-27 sm:h-27 lg:w-32 lg:h-32 rounded-full"
          />
        </div>
        <div className="flex items-center justify-center flex-col mt-5">
          <h3 className="font-secondary max-sm:text-[15px] sm:text-[17px] md:text-[17px] text-[20px] w-[100%] flex items-center justify-center ">
            Oi! Sou Allysson Ryan 👋🏻
          </h3>
          <h1 className="text-h1-410 max-sm:text-[30px] sm:text-[40px] text-[50px] font-secondary w-[100%] flex items-center justify-center text-center leading-tight mt-2">
            Desenvolvedor front-end
            <br />
            residente no Brasil.
          </h1>
          <p className="text-p-410 max-sm:text-[13px] sm:text-[14px] text-[16px] font-secondary text-secondary text-center max-sm:w-[70%] w-[55%] leading-tight mt-3 mb-5">
            Sou desenvolvedor front-end do Brasil, com experiência em projetos
            pessoais e estou em busca de novas oportunidades na área.
          </p>
        </div>
        <div className="flex items-center justify-center mt-3 gap-7 max-sm:flex-col ">
          <a
            href="https://github.com/Allysson-ryan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="max-sm:w-[9rem] sm:w-[8.5rem] md:w-[9.5rem] w-[11rem] flex items-center justify-center gap-2 p-3 rounded-[35px] bg-button hover:bg-gray">
              <img
                src={GithubLogo}
                alt="GithubLogo"
                className="sm:w-[22px] max-sm:w-[20px] max-sm:h-[20px] sm:h-[22px]  md:w-[25px] md:h-[25px] w-[30px] h-[30px] rounded-full"
              />
              <p className="text-third max-sm:text-[13px] sm:text-[13px] md:text-[15px]">
                Meu GitHub
              </p>
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1qOhE3icRfokskNvmU8YEDHcxY3LAPuWf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="max-sm:w-[9rem] sm:w-[8.5rem] md:w-[9.5rem] w-[11rem] flex items-center justify-center gap-2 p-3 rounded-[35px] border border-text-primary bg-background hover:bg-fifth">
              <p className="text-primary max-sm:text-[13px] sm:text-[13px] md:text-[15px]">
                Meu currículo
              </p>
              <DownloadSimple
                size={30}
                className="text-primary max-sm:w-[20px] max-sm:h-[20px] sm:w-[22px] sm:h-[22px] md:w-[25px] md:h-[25px]"
              />
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default HomeSection;
