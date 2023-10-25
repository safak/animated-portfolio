import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div className="element">
    <section id="Homepage">
      <Navbar />
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portafolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
