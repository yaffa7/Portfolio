import React from 'react';
import { Link } from 'react-router-dom'
import './BreadCrumbs.css'

const Breadcrumbs = (props) => {
    return (
        <div>
            <span className="breadcrumbs">
                <Link to="/">Home</Link> >
                    <span className="current-page">
                        {props.currentpage}
                    </span>
            </span>
        </div>
    )
}

export default Breadcrumbs