import "./hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <div className="textContainer">
                <h2>Gianfranco Navas F</h2>
                <h1>Web developer</h1>
                <div className="buttons">
                    <button>Latest Works</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
        </div>
        <div className="slidingTextContainer">
            Digital Navas
        </div>
        <div className="imageContainer">
            <img width="700px" height="" src="/personal-hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero