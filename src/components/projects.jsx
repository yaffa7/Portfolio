import React from 'react';
import { Link } from 'react-router-dom'
import './projects.css'
import angularicon from '../icons/angular-icon.svg'
import expressicon from '../icons/express-icon.png'
import mongoicon from '../icons/mongo-icon.png'
import nodeicon from '../icons/nodejs-icon.png'
import reacticon from '../icons/react-icon.svg'
import externalicon from '../icons/external-link.svg'
import todosplus from '../images/todos-plus.png'

const Projects = () => {
    return (
        <section className="content">
            <span className="breadcrumbs">
                <Link to="/">Home</Link> > <b>Projects</b>
            </span>
            <ul className="project-list">
                <ProjectItem projectName="Todos Plus" technologies="angular,express,mongo,node"imgURL={todosplus} desc="Todos Plus is a Full-Stack javascript app meant for creating a log of tasks and keep track of things you gotta do. The frontend is an Angular 6 app supported by a Node app for the backend using Mongodb for the database."/>
                <ProjectItem projectName="Quick Poll (Front End)" technologies="react" imgURL="https://via.placeholder.com/200x200" />
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
                <img src={props.imgURL} alt="" className="project-img" />
            </section>
                <p className="project-description">{props.desc ? props.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod! Velit in ducimus temporibus asperiores perspiciatis ea sed delectus impedit?"}</p>
            <div className="project-technologies">
                { props.technologies.split(',').map(t => {
                    if (t === 'angular') {
                        return <AngularIcon key={t}/>
                    }
                    if (t === 'express') {
                        return <ExpressIcon key={t}/>
                    }
                    if (t === 'node') {
                        return <NodeIcon key={t}/>
                    }
                    if (t === 'mongo') {
                        return <MongoIcon key={t}/>
                    }
                    if (t === 'react'){
                        return <ReactIcon key={t}/>
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
const ReactIcon = () => {
    return (
        <div className="technology"><img src={reacticon} alt="react icon"/></div>
    )
}

export default Projects