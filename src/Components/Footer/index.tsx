import EmailIcon from "../../assets/EmailIcon.png";

const Footer = () => {
  return (
    <footer className="w-[100%] mt-[20px]">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center gap-1 font-bold text-[30px]">
          Ryan
          <span className="text-accent text-[30px]">.</span>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <img src={EmailIcon} alt="emailIcon" className="w-[25px] h-auto" />
          <p className="text-fifth">allyssonr002@gmail.com</p>
        </div>
      </div>
      <div className="w-[100%] h-[4rem] flex items-center justify-center border-t-2 border-Fifth mt-[2rem]">
        <p className="text-[15px] max-sm:text-[12.5px] text-fifth">
          © 2025 Allysson Ryan. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
