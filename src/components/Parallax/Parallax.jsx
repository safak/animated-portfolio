import "./parallax.scss"

const Parallax = ({type}) => {
    return <div className="parallax"
    style={{
        background:
        type === "skills"
        ? "linear-gradient(180deg, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505064)"
    }}
    >
     <h1>{type === "skills" ? "My Skills" : "My Projects"}</h1>
    </div>
}

export default Parallax