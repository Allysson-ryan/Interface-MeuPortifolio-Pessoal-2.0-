import {
  Code,
  CodeBlock,
  Database,
  GraduationCap,
} from "@phosphor-icons/react";
import Title from "../Utils/Title";
import GitHubIcon from "../assets/GitHubIcon.svg";
import VsCodeIcon from "../assets/VsCodeIcon.png";
import GitIcon from "../assets/GitIcon.png";
import FigmaIcon from "../assets/FigmaIcon.png";

const AboutSection = () => {
  return (
    <main className="p-8 bg-gray w-[100%] max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col sm:flex sm:items-center sm:justify-center sm:flex-col md:flex md:items-center md:justify-center md:flex-col">
      <div className="flex items-center justify-center flex-col">
        <Title className="text-fourth">Sobre mim</Title>

        <p className=" font-secondary text-fifth max-sm:text-[14px] text-[16px] w-[70%] mt-[30px]">
          Sou <strong>Allysson Ryan</strong> tenho <strong>22 anos</strong> , moro em Surubim pernambuco e sou <strong>Desenvolvedor Full Stack Júnior</strong> com mais de <strong>2 ano de experiência prática</strong>  em <strong>projetos pessoais e trabalhos freelancer</strong>,
atuando no desenvolvimento de interfaces modernas, responsivas e focadas na experiência do usuário. <strong>Já conduzi projetos
completos desde o design no Figma até a publicação final</strong>, aplicando <strong>React.js, TypeScript, JavaScript, HTML e CSS.</strong> 
          <br></br>
          <br></br>
Como freelancer, entreguei soluções que geraram impacto direto para os clientes:
          <br></br>
<strong>– Aumento de mais de 30% na captação de clientes da Thaiz após o novo portfólio e posicionamento digital.</strong> 
          <br></br>
<strong>– Redução significativa do tempo de gestão do Tácio, graças ao sistema administrativo que automatizou processos e
organizou fluxos internos.</strong> 
          <br></br>
          <br></br>
Tenho experiência prática na construção de aplicações integradas com <strong>APIs REST e bancos de dados</strong> , seguindo <strong>código
limpo</strong> , boas práticas de segurança e foco em escalabilidade. Meus projetos incluem e-commerce, sistemas administrativos,
plataformas de produtividade e soluções multimídia. Também trabalho com <strong>Tailwind CSS, Styled Components, Node.js e
MongoDB</strong> .
          <br></br>
          <br></br>
Atualmente estou desenvolvendo o <strong>Clinsys</strong> , um sistema completo de gestão para clínicas médicas, com múltiplos perfis de
acesso, agendamentos, prontuários e fluxo administrativo, um projeto pessoal que demonstra minha capacidade de arquitetar
soluções robustas e escaláveis.
        </p>

        {/* max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col  */}
      </div>
      <div className=" mt-[50px] gap-[10px] w-[100%] custom-div-470 max-sm:grid max-sm:grid-cols-2 max-sm:w-[80%] max-sm:items-center max-sm:justify-around max-sm:ml-[27px] sm:grid sm:grid-cols-2 sm:w-[70%] sm:items-center sm:justify-around md:gap-[20px] md:grid md:grid-cols-2 md:w-[60%] lg:md:w-[75%] md:items-center md:justify-around lg:flex lg:items-center lg:justify-center">
        <div className="custom-border-470 max-sm:w-[10rem] lg:w-[14rem] w-[13rem] h-[10rem]  p-[15px] gap-[10px] flex items-start justify-center flex-col border-r-2 border-Fifth">
          <Code
            size={25}
            className="text-fourth max-sm:w-[20px] max-sm:h-[20px]"
          />
          <div className="flex justify-center flex-col w-[100%]">
            <h1 className="max-sm:text-[16px] text-[18px] pt-[10px] text-fourth">
              Linguagens
            </h1>
            <p className="max-sm:text-[12px] text-[13px] pt-[6px] text-fifth">
              HTML, CSS, JavaScript TypeScript
            </p>
          </div>
        </div>

        <div className="custom-border-470 max-sm:w-[10rem] lg:w-[14rem] w-[13rem] h-[10rem]  p-[15px] gap-[10px] flex items-start justify-center flex-col lg:border-r-2 border-Fifth max-sm:border-r-0 sm:border-r-0 md:border-r-0">
          <CodeBlock
            size={25}
            className="text-fourth max-sm:w-[20px] max-sm:h-[20px]"
          />
          <div className="flex justify-center flex-col w-[100%]">
            <h1 className="max-sm:text-[16px] text-[18px] pt-[10px] text-fourth">
              Frameworks
            </h1>
            <p className="max-sm:text-[12px] text-[13px] pt-[6px] text-fifth">
              ReactJs, Tailwind CSS, Styled Components
            </p>
          </div>
        </div>

        <div className="custom-border-470 max-sm:w-[10rem] lg:w-[15rem] w-[13rem] h-[10rem]  p-[15px] gap-[10px] flex items-start justify-center flex-col border-r-2 border-Fifth">
          <Database
            size={25}
            className="text-fourth max-sm:w-[20px] max-sm:h-[20px]"
          />
          <div className="flex justify-center flex-col w-[100%]">
            <h1 className="max-sm:text-[16px] text-[18px] pt-[10px] text-fourth">
              Banco de Dados
            </h1>
            <p className="max-sm:text-[12px] text-[13px] pt-[6px] text-fifth">
              MongoDb, PostgreSQL
            </p>
          </div>
        </div>

        <div className="custom-border-470 max-sm:w-[10rem] lg:w-[15.5rem] w-[13rem] h-[10rem]  p-[15px] gap-[10px] flex items-start justify-center flex-col">
          <GraduationCap
            size={25}
            className="text-fourth max-sm:w-[20px] max-sm:h-[20px]"
          />
          <div className="flex justify-center flex-col w-[100%]">
            <h1 className="max-sm:text-[16px] text-[18px] pt-[10px] text-fourth">
              Educação
            </h1>
            <p className="max-sm:text-[12px] text-[13px] pt-[6px] text-fifth">
              Curso fullstack - DevClub <br /> 12/2023 - 01/2025
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-[30px] mt-[50px] mb-[30px]">
        <div>
          <h1 className="max-sm:text-[20px] text-[25px] text-fifth">
            Ferramentas que eu uso
          </h1>
        </div>
        <div className=" custom-tecnologi-470 flex items-center justify-center gap-[50px]">
          <div className="flex items-center justify-center flex-col gap-[10px]">
            <img
              src={VsCodeIcon}
              alt="User"
              className="max-sm:w-10 max-sm:h-10 w-13 h-13"
            />
            <h3 className="text-fifth">VsCode</h3>
          </div>

          <div className="flex items-center justify-center flex-col gap-[10px]">
            <img
              src={GitIcon}
              alt="User"
              className=" max-sm:w-10 max-sm:h-10 w-13 h-13"
            />
            <h3 className="text-fifth">git</h3>
          </div>

          <div className="flex items-center justify-center flex-col gap-[10px]">
            <img
              src={GitHubIcon}
              alt="User"
              className="max-sm:w-10 max-sm:h-10 w-13 h-13"
            />
            <h3 className="text-fifth">github</h3>
          </div>

          <div className="flex items-center justify-center flex-col gap-[10px]">
            <img
              src={FigmaIcon}
              alt="User"
              className="max-sm:w-10 max-sm:h-10 w-13 h-13"
            />
            <h3 className="text-fifth">figma</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
