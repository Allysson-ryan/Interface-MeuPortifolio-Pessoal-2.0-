import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import DetailsProjects from "./Pages/DetailsProjects";
import Agradecimento from "./Pages/Agradecimento";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/projetos" element={<AllProjects />}></Route>
        <Route path="/projeto/:id" element={<DetailsProjects />} />
        <Route path="/detalhes" element={<DetailsProjects />}></Route>
        <Route path="/agradecimento" element={<Agradecimento />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
