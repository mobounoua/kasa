import PropTypes from "prop-types";

import fullStar from "../assets/images/fullStar.png"
import emptyStar from "../assets/images/emptyStar.png"

const Rating = ({rating}) =>{
    const totalStars = 5

    let fullStars =[]
    let emptyStars =[]
    
    for (let index = 0 ; index < rating ; index++){
        fullStars.push(<img className="stars" key={index} src={fullStar} alt="full Star" />)
    }

    for (let index=0 ; index < (totalStars - rating) ; index++){
        emptyStars.push(<img className="stars" key={index} src={emptyStar} alt="empty Star" />)
    }
    return(
        <div>
            {fullStars}
            {emptyStars}
        </div>
    )
}

Rating.propTypes = {
    rating : PropTypes.number.isRequired,
}

export default Rating