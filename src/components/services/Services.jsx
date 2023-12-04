import "./services.scss"
import {motion} from "framer-motion"

const Services = () => {
  return (
	<div className="services">
		<div className="textContainer">
			<p>
			I focused on exploring frontend developers 
			<br /> and data analysts
			</p>
			<hr />
		</div>
		<div className="titleContainer">
			<div className="title">
				<img src="/public/programmer.jpg" alt="" />
				<h1>What <b>Skills</b></h1>
			</div>
			<div className="title">
				<h1>Do I <b>Have</b> ?</h1>
			</div>
		</div>
		<div className="listContainer">
			<div className="box">
				<h2>Branding</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Consequatur, repellendus deserunt temporibus veritatis iure sunt doloremque ipsum dignissimos, 
					voluptatibus itaque voluptas velit quibusdam eius perferendis! Voluptatum iusto aliquid nisi ea!
				</p>
				<button>Go</button>
			</div>
		</div>
	</div>
  )
}

export default Services
