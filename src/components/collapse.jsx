import  { useState } from 'react';
import collapseArrow from '../assets/images/collapseArrow.png'
import PropTypes from 'prop-types'


const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse_container">
            <div className="collapse_head">
                <h3>{title}</h3>
                <button className="collapse_button" onClick={toggleCollapse}>
                    <img 
                        className={`collapse_arrow ${isOpen ? 'open' : ''}`} 
                        src={collapseArrow} 
                        alt={isOpen ? "Close Arrow" : "Open Arrow"} 
                    />
                </button>
            </div>
            <div className={`collapse_content ${isOpen ? 'animate' : ''}`}>
                {isOpen && <div>{children}</div>}
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    children : PropTypes.node.isRequired,
  };

export default Collapse;