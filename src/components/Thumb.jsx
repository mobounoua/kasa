import PropTypes from 'prop-types'


const Thumb = ({locations}) => {
    return(
        locations.map((location) =>(
            <div className="thumb" key={location.id}>
                <img src={location.cover} alt={location.title}/>
                <h3>{location.title}</h3>
            </div>
        ))
    )
}

Thumb.PropTypes ={
    
}
export default Thumb