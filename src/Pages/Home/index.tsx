import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeSection from "../../Sections/HomeSection";
import AboutSection from "../../Sections/AboutSection";
import ProjectsSection from "../../Sections/ProjectsSection";
import ContactSection from "../../Sections/ContactSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const elementId = hash.replace("#", "");
      const section = document.getElementById(elementId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="pt-11">
      <section id="home" className="scroll-mt-40 w-[100%]">
        <HomeSection />
      </section>

      <section id="sobre" className="scroll-mt-18 w-[100%]">
        <AboutSection />
      </section>

      <section id="projetos" className="scroll-mt-13 w-[100%]">
        <ProjectsSection />
      </section>

      <section id="contato" className="scroll-mt-13 w-[100%]">
        <ContactSection />
      </section>
    </main>
  );
};

export default Home;
