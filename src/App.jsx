import "./app.scss";
import { Hero, Navbar, Parallex, Services, Portfolio,Contact } from "./components";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallex type="services"/></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallex type="portfolio"/></section>
     <Portfolio />
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
