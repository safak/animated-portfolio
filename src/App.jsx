import "./app.scss"
import Navbar from "./components/Narbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Skill from "./components/skill/Skill";
import Gallery from "./components/gallery/Gallery";
import Project from "./components/project/Project";
import Card from "./components/card/Card";

const App = () => {
  return (<div>
    <Cursor />
    <section id="Home">
      <Navbar/>
      <Gallery />
      {/* <Hero/>   */}
    </section>
    {/* <section id="Services">
      <Parallax type="services" />
    </section> */}
    <section id="Experience">
      <Navbar/>
      <Services/>
      
    </section>
    
    {/* <section id="Portfolio">
      <Parallax type="portfolio" />
    </section> */}
     {/* <section id="Gallery">
      <Navbar/>
      <Gallery />
    </section> */}
    <section id="Skills">
      <Navbar/>
      <Skill/>
    </section >
    {/* <Portfolio/> */}
    <section id="Projects">
      {/* <Project /> */}
      <Card/>  
    </section>
    <section id="Contact">
      <Contact/>
    </section>
    

  </div>);
};

export default App;
