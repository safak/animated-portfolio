import "./app.scss"
import Navbar from "./Components/navbar/navbar"
import Hero from "./Components/hero/Hero"
import Parallax from "./Components/parallax/Parallax"
import Services from "./Components/services/Services"
import Bio from "./Components/bio/Bio"
import Portifolio from "./Components/portifolio/Portifolio"

const App = () => {
  return (
    <div>
      <section id="Inicio"><Navbar /><Hero /></section>
      <section id="Serviços"><Parallax type="Services" /></section>
      <section><Services /></section>
      <section id="Portifolio"> <Parallax type="portifolio" /></section>
      <section><Portifolio/></section>
      <section id="Sobre"><Bio /></section>
    </div>
  )
};

export default App;