import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Parallax from './components/Parallax/Parallax';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
