import "./app.scss"
import Hero from "./components/hero/Hero";

import Navbar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
  <div>

    <section>
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services" type="services">
      <Parallex type="services"/>
    </section>
    <section><Services/></section>
    <section id="Portfolio" type="portfolio">
      <Parallex/>
    </section>

      <Portfolio/>

    <section id="Contact" >Contact</section>

  </div>
  );
};

export default App;