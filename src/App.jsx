import Test from "./Test"
import "./app.scss"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return <div>
	<section id="Homepage">
		<Navbar/>
	</section>
	<section id="Services">Parallax</section>
	<section>Services</section>
	<section id="Portofolio">Parallax</section>
	<section>Portofolio1</section>
	<section>Portofolio2</section>
	<section>Portofolio3</section>
	<section id="Contact">Contact</section>
	{/* <Test /> */}
  </div>;
};

export default App;
