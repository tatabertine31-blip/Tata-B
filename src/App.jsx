import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SkillsPage from "./pages/SkillsPage";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import Education from "./pages/Education";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          {/* Main navigation pages */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          {/* Hamburger menu pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;