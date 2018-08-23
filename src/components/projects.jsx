import React from 'react';
import { Link } from 'react-router-dom'
import './projects.css'

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
            <section className="project-technologies">
                <div className="technology">Angular</div>
                <div className="technology">Express</div>
                <div className="technology">MongoDb</div>
            </section>
        </li>
    )
}

export default Projects