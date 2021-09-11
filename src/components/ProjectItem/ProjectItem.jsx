import React from 'react';
import { Link } from 'react-router-dom'
import './ProjectItem.scss'
import AngularIcon from '../Icons/Angular/AngularIcon'
import ExpressIcon from '../Icons/Express/ExpressIcon'
import mongoicon from '../../icons/mongo-icon.png'
import nodeicon from '../../icons/nodejs-icon.png'
import reacticon from '../../icons/react-icon.svg'
import externalicon from '../../icons/external-link.svg'
import todosplus from '../../images/todos-plus.png'
import quickpoll from '../../images/quick-poll.png'


const ProjectItem = (props) => {
    return (
        <li className="project-item">
            <section className="project-header">
                <div className="l-header">
                    <span className="project-title">{props.projectName}</span>
                    <a href={props.demo} target="__blank">
                        <button className="project-link">Demo <img src={externalicon} alt="external link icon"/></button>
                    </a>
                </div>
                <div className="r-header">
                    <div className="project-technologies">
                        {props.technologies.split(',').map(t => {
                            if (t === 'angular') {
                                return <AngularIcon key={t} />
                            }
                            if (t === 'express') {
                                return <ExpressIcon key={t} />
                            }
                            if (t === 'node') {
                                return <NodeIcon key={t} />
                            }
                            if (t === 'mongo') {
                                return <MongoIcon key={t} />
                            }
                            if (t === 'react') {
                                return <ReactIcon key={t} />
                            }
                        })}
                    </div>
                </div>
            </section>
            <section className="project-content">
                <img src={props.imgURL} alt="project" className="project-img" />
            </section>
            <p className="project-description">{props.desc ? props.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod! Velit in ducimus temporibus asperiores perspiciatis ea sed delectus impedit?"}</p>
        </li>
    )
}

const MongoIcon = () => {
    return (
        <div className="technology"><img src={mongoicon} alt="mongodb icon" /></div>
    )
}

const NodeIcon = () => {
    return (
        <div className="technology"><img className="node" src={nodeicon} alt="node icon" /></div>
    )
}
const ReactIcon = () => {
    return (
        <div className="technology"><img className="react" src={reacticon} alt="react icon" /></div>
    )
}

export default ProjectItem