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

const App = () => {
  return (<div>
    <Cursor />
    <section id="Home">
      <Navbar/>
      <Hero/>  
    </section>
    {/* <section id="Services">
      <Parallax type="services" />
    </section> */}
    <section id="Experience">
      <Services/>
      
    </section>
    <section id="Skills">
      <Skill/>
    </section>
    {/* <section id="Portfolio">
      <Parallax type="portfolio" />
    </section> */}
     <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
    <section>
      <Gallery />
    </section>

  </div>);
};

export default App;
