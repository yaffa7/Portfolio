import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import HamburgerIcon from '../Icons/Hamburger/Hamburger'

class Nav extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="item-list">
                        <li className="nav-item">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/yaffa7" className="nav-link">Github</a>
                        </li>
                        <li className="nav-item">
                            <HamburgerIcon/>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
