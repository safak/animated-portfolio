import './hero.scss';

const Hero = () => {
    return <div className='hero'>Hero
        <div className="textContainer">
            <h2>Steve Crabtree</h2>
            <h1>Web Developer and UI designer</h1>
            <div className="btn">
                <button>See my Latest Projects</button>
                <button>Contact Me</button>
            </div>
            <img src="/scroll.png" alt="scroll-down button" />
        </div>
        <div className="imageContainer">
            <img src='/hero.png' alt='' />
    </div>
    </div>;
};

export default Hero;
