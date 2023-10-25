import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
// import Test from "./Test";
import Services from "./components/services/Services";
import PortFolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return <div>
<Cursor/>    
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section>
      <Services/>
    </section>
    <section id="Portofolio">
     <Parallax type="Portofolio"/>
    </section>
    <PortFolio/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
