import React, { Component } from 'react';
import './landingpage.css'
import linkedinIcon from '../icons/linkedin.svg'
import githubicon from '../icons/github.svg'
import meetupIcon from '../icons/meetup.svg'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="title-container">
                    <h1 className="title">Brendan McMahon</h1>
                    <div className="subtitle">
                        <h4>Front End Developer</h4>
                        <a href="https://github.com/yaffa7/" target="__blank">
                            <img src={githubicon} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/brendan-mcmahon-009485101/" target="__blank">
                            <img src={linkedinIcon} alt="" />
                        </a>
                        <a href="https://www.meetup.com/Code-and-Coffee-SD/" target="__blank">
                            <img src={meetupIcon} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage