import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
/* import Test from "./Test";
 */
const App = () => {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Portfolio">Services</section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
      <section>Footer</section>

      {/*  <Test /> */}
    </>
  );
};

export default App;
