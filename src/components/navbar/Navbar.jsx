import "./Navbar.scss"

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <span>AV DEVLOPER</span>
                <div className="social">
                    <a href="#"><img src="./facebook.png"></img></a>
                    <a href="#"><img src="./instagram.png"></img></a>
                    <a href="#"><img src="./linkedin.webp"></img></a>
                    <a href="#"><img src="./github2.png"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar