import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Index"; // depois criamos o Header
import Footer from "../Components/Footer/index"; // se quiser rodapé

const MainLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col w-[100%]">
      <Header />
      <main className="flex-1 pt-[64px] w-[100%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
