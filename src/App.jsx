import "./app.scss"
import Hero from "./components/hero/Hero";

import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
  <div>

    <section>
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallex</section>
    <section>Services</section>
    <section id="Portfolio">Parallex</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact" >Contact</section>

  </div>
  );
};

export default App;