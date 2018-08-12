import React, { Component } from 'react';
import './nav.css'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="item-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Github</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
