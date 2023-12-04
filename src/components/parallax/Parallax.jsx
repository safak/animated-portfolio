import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import {useRef} from "react"

function Parallax({type}) {

	const ref = useRef()

	const {scrollYProgress} = useScroll({
		target:ref,
		offset:["start start", "end start"]
	})

	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])

  return (
	<div className="parallax"
	ref={ref}
	style={{
		background:
			type === "services"
				? "linear-gradient(180deg, #111132, #0c0c1d)"
				: "linear-gradient(180deg, #111132, #505064)" 
	}}
	>
		<motion.h1 style={{ y: yText }}>
			{type === "services" ? "What We Do ?" : "What We Did ?"}
		</motion.h1>
		<motion.div style={{ x: yBg }} className="stars"></motion.div>
	</div>
  )
}

export default Parallax
