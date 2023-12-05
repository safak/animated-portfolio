import {useRef} from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
	{
		id: 1,
		title: "Internship 1",
		subtitle: "Velocite Technology",
		img: "/velocite.png",
		desc: <ul className="velo">
			<li>Working on and improving more than 10 sub menus</li>
			<li>Create a database and relationships for several menus</li>
			<li>Creating APIs with Antares tools</li>
			<li>Create a front-end display using VueJS for several sub menus</li>
			<li>Using git as version control</li>
		</ul>
	},
	{
		id: 2,
		title: "Internship 2",
		subtitle: "Antares no Code",
		img: "/antares.png",
		desc: <ul className="antares">
			<li>Create CRUD views for employee data using NuxtJS</li>
			<li>Developing profile menus</li>
			<li>Processing employee data so that it is ready for use</li>
			<li>Access and manage databases using Navicat</li>
		</ul>
	}
]

const Single = ({item}) => {
	const ref = useRef()

	const {scrollYProgress} = useScroll({
		target: ref
	})

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imageContainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<hr />
						<h3>{item.subtitle}</h3>
						<p>{item.desc}</p>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

const Portfolio = () => {

	const ref = useRef()

	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["end end", "start start"]
	})

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	})

  return (
	<div className="portfolio" ref={ref}>
		<div className="progress">
			<h1>My Project</h1>
			<motion.div style={{ scaleX }} className="progressBar"></motion.div>
		</div>
		{items.map((item) => (
			<Single item={item} key={item.id} />
		))}
	</div>
  )
}

export default Portfolio
