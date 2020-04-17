import React from 'react'
import SEO from '../components/seo'
import Nav from '../components/Nav'
import SocialSidebar from '../components/SocialSidebar'
import AboutPhoto from '../images/about_photo.png'
import '../style/app.scss'

const About = () => (
    <>
        <SEO title="Stefan Stankovic , stefans.dev | Web Design and Development" />
        <div className="page_wrap">
            <Nav />
            <SocialSidebar />
            <section className="content">
                <div className="about_grid">
                    <div className="about_content">
                        <h1>ABOUT ME</h1>

                        <p>
                            I’m Stefan Stankovic, a full stack web developer and
                            designer from Belgrade, Serbia.
                        </p>
                        <p>
                            I’ve been working in Web Developer since 2013. And
                            since 2016 I’ve been leading Web Development team in
                            Singular Minds.
                        </p>
                        <p>
                            Obsesed with clean code, formating and
                            optimizations.
                        </p>
                        <p>
                            Through the years of my experience I worked with
                            various clients and projects from all over the
                            world.
                        </p>

                        <h2>Skills</h2>

                        <ul className="skills_list">
                            <li>HTML / CSS</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>GatsbyJS</li>
                            <li>NextJS</li>
                            <li>PHP</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                    <div className="about_image">
                        <img src={AboutPhoto} alt="About Stefan Stankovic " />
                    </div>
                </div>
            </section>
        </div>
    </>
)

export default About
