import "./parallax.scss"

const Parallax = ({type}) => {
    return <div className="parallax">
     <h1>{type==="skills" ? "My Skills" : "My Projects"}</h1>
    </div>
}

export default Parallax