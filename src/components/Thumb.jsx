import PropTypes from 'prop-types'


const Thumb = ({locations}) => {
    return(
        locations.map((location) =>(
            <div className="thumb" key={location.id}>
                <img src={location.cover} alt={location.title}/>
                <h2>{location.title}</h2>
            </div>
        ))
    )
}

Thumb.propTypes ={
    locations: PropTypes.array.isRequired
}
export default Thumb