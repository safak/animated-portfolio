import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'></section>
      <section></section>
      <section id='Portfolio'></section>
      <section></section>
      <section></section>
      <section></section>
      <section id='Contact'></section>
    </div>
  );
};

export default App;
