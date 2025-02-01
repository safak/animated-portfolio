import Test from "./Test";
import "./app.scss"
import Navbar from "./component/navbar/Navbar";


const App = () => {
  return <div>
    <section >
      <Navbar/>
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section> 
   {/*<Test/>
   <Test/>*/}
  </div>;
};

export default App;
