import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <span>Sabrina Quadir</span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/sabrina-quadir-4543721b4/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="Sabrina's LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
