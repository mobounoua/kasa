import PropTypes from 'prop-types'
import { useState } from "react"
import leftArrow from "../assets/images/leftArrow.png"
import rightArrow from "../assets/images/rightArrow.png"
 

const Caroussel = ({slides}) =>{
    
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const handlePrev = () =>{
        setCurrentIndex ((prevIndex) => (prevIndex === 0 ? slides.length -1 : prevIndex -1))
    }

    const handleNext = () =>{
        setCurrentIndex ((prevIndex) => (prevIndex === slides.length-1 ? 0 : prevIndex +1) )
    }

    const currentSlide = slides[currentIndex]
    const numSlides = slides.length

    const showArrows = numSlides > 1
    const showIndicator = numSlides > 1

    return(
        <div className='caroussel'>            
            <img className='slider' src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
            {showArrows && (
                <div>
                    <img className='leftArrow' src={leftArrow} alt="flèche droite" onClick={handlePrev}/>         
                    <img className='rightArrow' src={rightArrow} alt="flèche gauche"  onClick={handleNext}/>
                </div>
            )}  
            {showIndicator &&(
                <div className='slide-indicator'> {`${currentIndex +1}/${slides.length}`} </div>
            )}         
        </div>
    )
}


Caroussel.propTypes = {
    slides : PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  

export default Caroussel