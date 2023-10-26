import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/firstpage/Firstpage"
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return <div> 
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id= "Services"><Parallax type="services"/></section>
    <section ><Services/></section>
    <section id= "Protfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contacts">contact</section>

  </div>;
};

export default App;
