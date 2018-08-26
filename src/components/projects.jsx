import React from 'react';
import { Link } from 'react-router-dom'
import './projects.css'
import angularicon from '../icons/angular-icon.svg'
import expressicon from '../icons/express-icon.png'
import mongoicon from '../icons/mongo-icon.png'
import nodeicon from '../icons/nodejs-icon.png'

const Projects = () => {
    return (
        <section className="content">
            <span className="breadcrumbs">
                <Link to="/">Home</Link> > <b>Projects</b>
            </span>
            <ul className="project-list">
                <ProjectItem projectName="Todos Plus" imgURL="https://via.placeholder.com/200x200" />
                <ProjectItem projectName="Quick Poll" imgURL="https://via.placeholder.com/200x200" />
            </ul>
        </section>
    )
}

const ProjectItem = (props) => {
    return (
        <li className="project-item">
            <section className="project-header">
                <span className="project-title">{props.projectName}</span>
            </section>
            <section className="project-content">
                <img src={props.imgURL} alt="" className="project-img" />
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod! Velit in ducimus temporibus asperiores perspiciatis ea sed delectus impedit?</p>
            </section>
            <div className="project-technologies">
                <div className="technology"><img src={angularicon} alt="angular icon"/></div>
                <div className="technology"><img src={expressicon} alt="express icon"/></div>
                <div className="technology"><img src={mongoicon} alt="mongodb icon"/></div>
                <div className="technology"><img className="node" src={nodeicon} alt="node icon"/></div>
            </div>
        </li>
    )
}

export default Projects