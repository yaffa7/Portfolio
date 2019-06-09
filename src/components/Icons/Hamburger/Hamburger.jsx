import React from 'react';
import './Hamburger.css'

const Hamburger = (props) => {
    return (
        <div className={props.expanded ? 'hamburger container-expanded' : 'hamburger container'}>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    )
}

export default Hamburger