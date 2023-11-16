import './Home.scss';
import '../../app.scss';
import * as Unicons from '@iconscout/react-unicons';
import bg1 from  '../../assets/img/Home/bg4.gif';


const Home = () => {
    return(
        <section className="home section" id='home'>
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        <a href="https://www.linkedin.com/in/sergio-uriel-reyes-tirro-5b638021b/" target='blank' className="home_social-icon">
                            <i><Unicons.UilLinkedinAlt/></i>
                        </a>

                        <a href="https://github.com/stirro/" target='blank' className="home_social-icon">
                            <i><Unicons.UilGithub/></i>
                        </a>

                        <a href="https://black-mud-0eec09910.4.azurestaticapps.net/" target='blank' className="home_social-icon">
                            <i><Unicons.UilDribbble/></i>
                        </a>
                    </div>

                    <div className="home_img">
                        <img src={bg1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;