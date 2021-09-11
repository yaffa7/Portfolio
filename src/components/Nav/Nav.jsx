import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.scss'
import HamburgerIcon from '../Icons/Hamburger/Hamburger'

class Nav extends Component {
    componentWillMount() {
        this.setState({
            y: window.pageYOffset,
            expanded: false
        })
        // User scroll event
        window.addEventListener('scroll', () => {
            this.updateScrollState()
        })
    }

    updateScrollState() {
        this.setState((state) => {
            return {
                y: window.pageYOffset,
                expanded: state.expanded
            }
        })
    }

    updateExpanded = () => {
        this.setState((state) => {
            return {
                y: state.y,
                expanded: !state.expanded
            }
        }, function () { console.log(this.state); })
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                y: state.y,
                expanded: false
            }
        })
    }

    render() {
        const shouldBeOpaque = this.state && this.state.y > 65;
        let expanded = this.state && this.state.expanded;


        { if (expanded === false) {
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
                            <li className="nav-item" onClick={this.updateExpanded}>
                                <HamburgerIcon expanded={false}/>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            else {
                return (
                    <div>
                    <nav className="navbar-opaque">
                        <div onClick={this.updateExpanded}>
                            <HamburgerIcon expanded={true}/>
                        </div>
                        <ul className="item-list-expanded" onClick={this.handleClick}>
                            <li className="nav-item-expanded">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item-expanded">
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item-expanded" onClick={this.handleClick}>
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li className="nav-item-expanded" onClick={this.handleClick}>
                                <a href="https://github.com/yaffa7" className="nav-link">Github</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                )
            }
        }
    }
}

export default Nav
