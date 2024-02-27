import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
const App = () => {
  return <div>
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section id="About Me"><Parallax/></section>
    <section id="Experience & Skills"><Experience /></section>
    <Portfolio />
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
