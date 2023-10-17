import "./navbar.scss"

const Navbar = ()=>{
    return (

        <div className="navbar">
            {/* sidebar */}
            <div className="wrapper">
                <span>Harsh</span>
                <div className="social">
                    <a href = "#"><img src = "/facebook" alt = ""/></a>
                    <a href = "#"><img src = "/instagram" alt = ""/></a>
                    <a href = "#"><img src = "/youtube" alt = ""/></a>
                    <a href = "#"><img src = "/dribble" alt = ""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar