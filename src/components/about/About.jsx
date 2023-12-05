import "./about.scss"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1
		}
	}
}

const About = () => {

	const ref = useRef();

	const isInView = useInView(ref, { margin: "-100px"})

  return (
	<motion.div 
	className="services"
	variants={variants}
	initial="initial"
	// whileInView="animate"
	ref={ref}
	animate={isInView && "animate"}
	>
		<motion.div className="textContainer" variants={variants}>
			<p>
			I focused on exploring frontend developers 
			<br /> and data analysts
			</p>
			<hr />
		</motion.div>
		<motion.div className="titleContainer" variants={variants}>
			<div className="title">
				<img src="/public/programmer.jpg" alt="" />
				<h1>What <motion.b whileHover={{ color:"#ff364d" }}>Skills</motion.b></h1>
			</div>
			<div className="title">
				<h1>Do I <motion.b whileHover={{ color:"#ff364d" }}>Have</motion.b> <motion.b whileHover={{ color:"#4713f0" }}>?</motion.b></h1>
			</div>
			<div className="paragraph">
				<p>
					Fresh graduate from Telkom University majoring in Computer Science, with almost a year experience as a frontend developer, expertise in HTML, CSS, Javascript and also have worked with variety of framework, including VueJS, Laravel, and React.
				</p>
			</div>
		</motion.div>
		<motion.div className="listContainer" variants={variants}>
			<motion.div className="logo-slide" variants={variants}>
				<img src="/bootstrap.png" alt="" />
				<img src="/css.png" alt="" />
				<img src="/figma.png" alt="" />
				<img src="/git.png" alt="" />
				<img src="/html.png" alt="" />
				<img src="/javascript.png" alt="" />
				<img src="/laravel.png" alt="" />
				<img src="/navicat.png" alt="" />
				<img src="/react.png" alt="" />
				<img src="/tailwind.png" alt="" />
				<img src="/vuejs.png" alt="" />
				<img src="/bootstrap.png" alt="" />
				<img src="/css.png" alt="" />
				<img src="/figma.png" alt="" />
				<img src="/git.png" alt="" />
				<img src="/html.png" alt="" />
				<img src="/javascript.png" alt="" />
				<img src="/laravel.png" alt="" />
				<img src="/navicat.png" alt="" />
				<img src="/react.png" alt="" />
				<img src="/tailwind.png" alt="" />
				<img src="/vuejs.png" alt="" />
				<img src="/bootstrap.png" alt="" />
				<img src="/css.png" alt="" />
				<img src="/figma.png" alt="" />
				<img src="/git.png" alt="" />
				<img src="/html.png" alt="" />
				<img src="/javascript.png" alt="" />
				<img src="/laravel.png" alt="" />
				<img src="/navicat.png" alt="" />
				<img src="/react.png" alt="" />
				<img src="/tailwind.png" alt="" />
				<img src="/vuejs.png" alt="" />
				<img src="/bootstrap.png" alt="" />
				<img src="/css.png" alt="" />
				<img src="/figma.png" alt="" />
				<img src="/git.png" alt="" />
				<img src="/html.png" alt="" />
				<img src="/javascript.png" alt="" />
				<img src="/laravel.png" alt="" />
				<img src="/navicat.png" alt="" />
				<img src="/react.png" alt="" />
				<img src="/tailwind.png" alt="" />
				<img src="/vuejs.png" alt="" />
			</motion.div>
		</motion.div>
	</motion.div>
  )
}

export default About
