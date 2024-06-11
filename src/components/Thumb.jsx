import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const Thumb = ({locations}) => {
    return(
        locations.map((location) =>(
            <div className="thumb" key={`routePaths${location.id}`}>
                <NavLink to={`/location/${location.id}`}>               
                    <img src={location.cover} alt={location.title}/>
                    <h2 key={`${location.id}`}>{location.title}</h2>
                </NavLink>
            </div>
        ))
    )
}

Thumb.propTypes ={
    locations: PropTypes.array.isRequired
}
export default Thumb