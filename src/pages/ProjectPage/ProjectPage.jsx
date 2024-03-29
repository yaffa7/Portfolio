import React from 'react';
import './ProjectPage.scss'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import todosplus from '../../images/todos-plus.png'
import quickpoll from '../../images/quick-poll.png'
import foa from '../../images/fields-of-aeorzia.png'
import weather from '../../images/weather.png'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

const ProjectPage = () => {
    return (
        <section className="content">
        <div className="sticky-container">
            <BreadCrumbs currentpage="Projects"/>
        </div>
            <div className="container-center">
                <ul className="project-list">
                    <ProjectItem
                        projectName="Weather Dashboard"
                        demo="https://yaffa7.github.io/weather/"
                        imgURL={weather}
                        technologies="OW"
                        desc='Weather app that changes depending on time of day. Powered by the OpenWeather API'
                    />
                    <ProjectItem
                        projectName="Fields of Aeorzia (Work-in-Progress)"
                        demo="https://yaffa7.github.io/aeorzia/"
                        imgURL={foa}
                        technologies="react,MobX"
                        desc="Opensource turn-based dungeon crawler. Extendable framework for creating adventures."
                    />
                    <ProjectItem 
                        projectName="Todos Plus" 
                        demo="https://sleepy-fortress-89639.herokuapp.com" 
                        technologies="angular,express,mongo,node" 
                        imgURL={todosplus} 
                        desc="Write it down. Get it done. Todos Plus is a Full-Stack javascript app meant for creating a log of tasks and keeping track of things you gotta do. The frontend is an Angular 6 app supported by an Express backend for the API--using Mongodb for the database with JSON web tokens for authentication." />
                    <ProjectItem 
                        projectName="Quick Poll (Front End)" 
                        demo="http://yaffa7.github.io/quick-poll" 
                        technologies="react" 
                        imgURL={quickpoll} 
                        desc="Quick Poll is the front end for an anonymous poll website where you can easily create your own poll"/>
                </ul>
            </div>
        </section>
    )
}

export default ProjectPage