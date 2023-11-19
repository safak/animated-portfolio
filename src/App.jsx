import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import "./app.scss";
const App = () => {
  return <div>
    <main className="main">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </main>
  </div>;
};

export default App; 