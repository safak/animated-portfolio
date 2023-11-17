import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./app.scss";
const App = () => {
  return <div>
    <main className="main">
      <Navbar/>
      <Home/>
      <About/>
    </main>
  </div>;
};

export default App; 