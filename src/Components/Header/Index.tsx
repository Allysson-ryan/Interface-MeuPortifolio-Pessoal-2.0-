import "../../Styles/index.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, List, X } from "@phosphor-icons/react";
import { applyTheme, getInitialTheme } from "../../Utils/theme";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

interface HeaderProps {
  showProjectsLink?: boolean;
  showNavigation?: boolean;
}

const Header = ({
  showProjectsLink = true,
  showNavigation = true,
}: HeaderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const scrollToSection = (id: string) => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const NavLinks = ({ onClickLink }: { onClickLink?: () => void }) => (
    <ul className="flex items-center justify-center flex-col text-primary w-full mt-[20px]">
      <li
        className="cursor-pointer hover:bg-[#9D9D9D] hover:text-[#000000] p-[15px] w-full flex items-center justify-center"
        onClick={() => {
          scrollToSection("home");
          onClickLink?.();
        }}
      >
        Home
      </li>
      <li
        className="cursor-pointer hover:bg-[#9D9D9D] hover:text-[#000000] p-[15px] w-full flex items-center justify-center"
        onClick={() => {
          scrollToSection("sobre");
          onClickLink?.();
        }}
      >
        Sobre mim
      </li>
      {showProjectsLink && (
        <li
          className="cursor-pointer hover:bg-[#9D9D9D] hover:text-[#000000] p-[15px] w-full flex items-center justify-center"
          onClick={() => {
            scrollToSection("projetos");
            onClickLink?.();
          }}
        >
          Projetos
        </li>
      )}
      <li
        className="cursor-pointer hover:bg-[#9D9D9D] hover:text-[#000000] p-[15px] w-full flex items-center justify-center"
        onClick={() => {
          scrollToSection("contato");
          onClickLink?.();
        }}
      >
        Contatos
      </li>
    </ul>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background">
        {/* ============ VERSÃO MÓVEL (abaixo de sm: <640px) ============ */}
        <div className="flex items-center justify-between px-8 py-4 sm:hidden">
          <button onClick={toggleTheme} className="border-0">
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>

          <div className="font-bold text-[30px] flex items-center">
            Ryan<span className="text-accent text-[30px]">.</span>
          </div>

          {showNavigation && (
            <button onClick={handleDrawerOpen} className="border-0">
              <List size={28} />
            </button>
          )}
        </div>

        {/* ============ VERSÃO DESKTOP (>= sm: ≥640px) ============ */}
        <div className="hidden sm:flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-1 font-bold text-[30px]">
            Ryan<span className="text-accent text-[30px]">.</span>
          </div>

          {showNavigation && (
            <nav className="border border-text-secondary rounded-full px-8 py-2">
              <ul className="flex gap-8 text-secondary">
                <li
                  className="hover:text-accent text-primary cursor-pointer"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </li>
                <li
                  className="hover:text-accent text-primary cursor-pointer"
                  onClick={() => scrollToSection("sobre")}
                >
                  Sobre mim
                </li>
                {showProjectsLink && (
                  <li
                    className="hover:text-accent text-primary cursor-pointer"
                    onClick={() => scrollToSection("projetos")}
                  >
                    Projetos
                  </li>
                )}
                <li
                  className="hover:text-accent text-primary cursor-pointer"
                  onClick={() => scrollToSection("contato")}
                >
                  Contatos
                </li>
              </ul>
            </nav>
          )}

          <button onClick={toggleTheme} className="border-0">
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
      </header>

      {/* ============ DRAWER MÓVEL  ============ */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            backgroundColor: "#b9b9b9",
            width: 250,
          },
        }}
      >
        <Box className="p-4 h-full flex flex-col">
          <div className="flex justify-end mb-4">
            <button onClick={handleDrawerClose} className="border-0">
              <X size={28} weight="bold" cursor="pointer" />
            </button>
          </div>

          <nav>
            <NavLinks onClickLink={handleDrawerClose} />
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
