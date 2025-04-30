import "./app.scss"
import Navbar from "./Components/navbar/navbar"
import Hero from "./Components/hero/Hero"
import Services from "./Components/services/Services"
import Portifolio from "./Components/portifolio/Portifolio"
import Bio from "./Components/bio/Bio"
import Contato from "./Components/contato/Contato"
import Cursor from "./Components/cursor/Cursor"


const App = () => {
    return (
        <div>
            <Cursor/>
            <section id="Inicio"><Navbar /> <Hero/></section>
            <section id="Sobre"><Bio /></section>
            <section id="Serviços"><Services /></section>
            <section id="Portifólio"><Portifolio /></section>
            <section id="Contato"> <Contato/> </section>
        </div>
    );
};

export default App;