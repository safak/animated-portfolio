import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Welcome from "./components/Welcome/Welcome"
const App = () => {
  return <div>
    <section id="Home">
    <Navbar/>
    <Welcome/>
    </section>
    <section id="Skills"><Prallax type={skills}/></section>
    <section>Skills</section>
    <section id="Projects"><Parallax type={projects}/></section>
    <section>Project1</section>
    <section>Project2</section>
    <section>Project3</section>
    <section>Project4</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
