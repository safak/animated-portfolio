import './hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <div className="textContainer">
            <h2>ART WORLD</h2> 
            <h1>Experience the art love around</h1>
            <div className="buttons">
                <button>See the Latest release</button>
                <button>Contact me</button>
            </div>
            <img src="/scroll.png" alt=""/>
        </div>
      </div>
      <div className="imageContainer">
        <img  src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
