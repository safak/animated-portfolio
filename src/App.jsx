import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Parallax from './components/Parallax/Parallax';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='services'>
        <Parallax type='services' />
      </section>
      <section>"</section>
      <section id='portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section id='Contact'></section>
    </div>
  );
};


export default App;
