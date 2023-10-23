import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div> 
    <section id="Homepage">
      <Navbar/>
    </section>
    <section>parallax</section>
    <section id= "Services">Servecis</section>
    <section>parallax</section>
    <section id= "Protfolio">portfolio1</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section id="Contacts">contact</section>

  </div>;
};

export default App;
