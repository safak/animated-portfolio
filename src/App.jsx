import "./app.scss"
import Hero from "./components/hero/Hero";

import Navbar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";

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
    <section>Services</section>
    <section id="Portfolio" type="portfolio">Parallex</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact" >Contact</section>

  </div>
  );
};

export default App;