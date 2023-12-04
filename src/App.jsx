import Test from "./Test"
import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax"
import About from "./components/about/About"

const App = () => {
  return <div>
	<section id="Homepage">
		<Navbar/>
		<Hero/>
	</section>
	<section id="About"><Parallax type="about"/></section>
	<section>
		<About/>
	</section>
	<section id="Portfolio"><Parallax type="portfolio"/></section>
	<section>Portfolio1</section>
	<section>Portfolio2</section>
	<section>Portfolio3</section>
	<section id="Contact">Contact</section>
	{/* <Test /> */}
  </div>;
};

export default App;
