import { useEffect } from "react";
import locations from "../data/locations";
import Caroussel from "./Caroussel";
import { useParams, useNavigate } from 'react-router-dom'

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
        <div className="loc">
            <Caroussel slides ={location.pictures} />

        </div>
    )

}
export default Loc 