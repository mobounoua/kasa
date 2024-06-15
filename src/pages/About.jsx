import BannerAbout from "../components/BannerAbout"
import colapsList from "../data/colaps"
import Collapse from "../components/collapse"

const About = () => {
    return(
        <div className="about">
            <BannerAbout />
            {colapsList.map((colaps, index) => (
                <Collapse key={index} index={index} title={colaps.title}>
                    {colaps.text}
                </Collapse>
             ))}
        </div>
    ) 
}
export default About