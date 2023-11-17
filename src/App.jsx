import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
const App = () => {
  return <div>
    <main className="main">
        <section>
          <Navbar/>
          <Home/>
        </section>
        <section>
          
        </section>
    </main>
  </div>;
};

export default App; 