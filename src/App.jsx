import "./app.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section >
      <Navbar />
    </section>
    <section id="services">Parallax</section>
    <section>Services</section>
    <section id="portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="contact">Contact</section>
  </div>;
};

export default App;
