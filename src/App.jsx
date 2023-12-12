import "./app.scss"
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Cursor/>
      <Navbar/>
      <Hero/>
    </section>
    {/* <section><a href="/">Heros</a></section> */}
      <section id="Services"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      {/* <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section> */}
      <Portfolio/>
      <section id="Contact"><Contact/></section>
      {/* <Test/> */}
    
  </div>;
};

export default App;
