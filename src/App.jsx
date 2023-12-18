import './app.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Cursor from './components/mouse/Cursor'

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Cursor />
        <Hero />
        <Navbar />
      </section>
      <section id='Services'><Parallax type='services'/></section>
      <section><Services /></section>
      <section id='Portfolio'><Parallax type='portfolio'/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
    </div>
  )
}

export default App
