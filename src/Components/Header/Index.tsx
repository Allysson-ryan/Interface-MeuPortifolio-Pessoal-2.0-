import "../../Styles/index.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun } from "@phosphor-icons/react";
import { applyTheme, getInitialTheme } from "../../Utils/theme";

interface HeaderProps {
  showProjectsLink?: boolean;
  showNavigation?: boolean;
}

const Header = ({
  showProjectsLink = true,
  showNavigation = true,
}: HeaderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
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

  return (
    <header className="fixed top-0 left-0 w-[100%] z-50 flex items-center justify-between px-8 py-4 bg-background">
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
    </header>
  );
};

export default Header;
