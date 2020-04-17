import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Nav from '../components/Nav'
import SocialSidebar from '../components/SocialSidebar'
import ProfilePhoto from '../images/profile_photo.png'
import '../style/app.scss'

const Homepage = () => (
    <>
        <div className="page_wrap">
            <SEO title="Stefan Stankovic , stefans.dev | Web Design and Development" />
            <Nav />
            <SocialSidebar />
            <section className="content welcome">
                <motion.div
                    animate={{ y: 50 }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                    className="welcome_box"
                >
                    <div className="profile_picture">
                        <img
                            src={ProfilePhoto}
                            alt="Stefan Stankovic Stefans Dev"
                        />
                    </div>
                    <motion.div
                        animate={{ y: -20 }}
                        transition={{ ease: 'easeOut', duration: 2 }}
                        className="welcome_content"
                    >
                        <h2
                            animate={{ y: -20 }}
                            transition={{ ease: 'easeOut', duration: 2 }}
                        >
                            Hi !
                        </h2>
                        <h1
                            animate={{ y: -20 }}
                            transition={{ ease: 'easeOut', duration: 2 }}
                        >
                            I’m Stefan, <br />I do Web Development
                        </h1>
                        <blockquote
                            animate={{ y: -20 }}
                            transition={{ ease: 'easeOut', duration: 2 }}
                        >
                            - Perfect Code does matter
                        </blockquote>

                        <div
                            animate={{ y: -20 }}
                            transition={{ ease: 'easeOut', duration: 2 }}
                            className="call_to_actions"
                        >
                            <Link to="/work">check my work</Link>
                            <Link to="/contact">hire me</Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    </>
)

export default Homepage
