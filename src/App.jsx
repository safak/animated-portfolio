import './App.scss'
import Navbar from './component/NavBar/Navbar';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parllax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>PortFolio3</section>
      <section>Contact</section>
      {/* <Test /> */}
    </div>
  ) 
};

export default App;
