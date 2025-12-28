import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/Services";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import ProjectDetails from "./components/project/ProjectDetails.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <section id="Homepage">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="services">
                <Services />
              </section>

              <Project />

              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />

        {/* Case Study Page */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
