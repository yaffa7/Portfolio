import React from 'react';
import { Link } from 'react-router-dom'
import './projects.css'
import angularicon from '../icons/angular-icon.svg'
import expressicon from '../icons/express-icon.png'
import mongoicon from '../icons/mongo-icon.png'
import nodeicon from '../icons/nodejs-icon.png'
import externalicon from '../icons/external-link.svg'

const Projects = () => {
    return (
        <section className="content">
            <span className="breadcrumbs">
                <Link to="/">Home</Link> > <b>Projects</b>
            </span>
            <ul className="project-list">
                <ProjectItem projectName="Todos Plus" technologies="angular,express,mongo,node"imgURL="https://via.placeholder.com/200x200" />
                <ProjectItem projectName="Quick Poll (Front End)" technologies="express,mongo" imgURL="https://via.placeholder.com/200x200" />
            </ul>
        </section>
    )
}

const ProjectItem = (props) => {
    return (
        <li className="project-item">
            <section className="project-header">
                <span className="project-title">{props.projectName}</span>
                <a href="https://sleepy-fortress-89639.herokuapp.com">
                    <button className="project-link">Demo <img src={externalicon} alt="external link icon"/></button>
                </a>
            </section>
            <section className="project-content">
                <img src={props.imgURL} alt="" className="project-img" />
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod! Velit in ducimus temporibus asperiores perspiciatis ea sed delectus impedit?</p>
            </section>
            <div className="project-technologies">
                { props.technologies.split(',').map(t => {
                    if (t === 'angular') {
                        return <AngularIcon/>
                    }
                    if (t === 'express') {
                        return <ExpressIcon/>
                    }
                    if (t === 'node') {
                        return <NodeIcon/>
                    }
                    if (t === 'mongo') {
                        return <MongoIcon/>
                    }
                })}
            </div>
        </li>
    )
}

const AngularIcon = () => {
    return (
        <div className="technology"><img src={angularicon} alt="angular icon"/></div>
    )
}

const ExpressIcon = () => {
    return (
        <div className="technology"><img src={expressicon} alt="express icon"/></div>
    )
}

const MongoIcon = () => {
    return (
        <div className="technology"><img src={mongoicon} alt="mongodb icon"/></div>
    )
}

const NodeIcon = () => {
    return (
        <div className="technology"><img className="node" src={nodeicon} alt="node icon"/></div>
    )
}

export default Projects