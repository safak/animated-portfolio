import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/myskills/Myskills";
import Portfolio from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Firstpage from "./components/firstpage/Firstpage";



const App = () => {
  return ( 
  <> 
    <section id="Homepage">
      <Navbar/> 
      <Firstpage/>
    </section>
    <section id= "My Skills"><Parallax type="skills"/></section>
    <section id= "SkillsL"><Services/></section>
    <section id= "Projects"><Parallax type="projects"/></section>
    <div id= "ProjectsL"><Portfolio/></div>
    <section id="Contacts">
    <Contact/>
    </section>
   </>
    )
};

export default App;
