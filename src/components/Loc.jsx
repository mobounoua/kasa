import { useEffect } from "react";
import locations from "../data/locations";
import Caroussel from "./Caroussel";
import Tags from "./Tags";
import Rating from "./Rating"
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from "./collapse";

const Loc = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const location = locations.find((item) => item.id ===id)
    
    useEffect(() =>{
        if (!location){
            navigate("/error")
        }
    },[id, location, navigate ])

    if (!location) {
        return null; 
    }

    return(
        <>
        <div className="loc">
            <Caroussel slides ={location.pictures} />
            <div className="loc_content">
                <div className="loc_content_left">
                    <h1>{location.title}</h1>
                    <h2>{location.location}</h2>
                    <div className="loc_content_left_tags">
                        {location.tags.map((tag, index) => (
                        <Tags key={index} text={tag} />
                        ))}
                    </div>
                </div>
                <div className="loc_content_right">
                    <div className="host">
                        <h3>{location.host.name}</h3>
                        <img src= {location.host.picture} alt={`photo de ${location.host.name}`} />
                    </div>
                    <div className="rating">
                        <Rating rating={parseInt(location.rating,10)}/>
                    </div>
                </div>
            </div>
            <div className="description_equipements">
                <Collapse title="Description">{location.description} </Collapse>
                <Collapse title="Equipement">
                    <ul>
                        {location.equipments.map((equip, index) => (
                            <li key={index}>{equip}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
        </>
    )

}
export default Loc 