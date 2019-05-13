import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import HamburgerIcon from '../Icons/Hamburger/Hamburger'

class Nav extends Component {
    

    componentWillMount() {
        window.addEventListener('scroll', () => {
            this.setState( {
              y: window.pageYOffset
            })
            this.updateScrollState()
          })
    }

    updateScrollState() {
        this.setState({ y : window.pageYOffset})
    }

    render() {
        const shouldBeOpaque = this.state && this.state.y > 65;
        return (
            <div>
                <nav className={shouldBeOpaque ? 'navbar-opaque' : 'navbar'}>
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
