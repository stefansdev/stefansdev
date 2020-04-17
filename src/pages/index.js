/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
// import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Nav from '../components/Nav'
import SocialSidebar from '../components/SocialSidebar'
import BgVideo from '../images/bg_optimized.mp4'

const Homepage = () => (
    <>
        <SEO title="Stefan Stankovic , stefans.dev | Web Design and Development" />
        <Nav />
        <SocialSidebar />
        <div className="hero">
            <video autoPlay loop>
                <source src={BgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content">
                <h1>
                    Hi, I'm Stefan, <br />I do Web Development
                </h1>
                <h4>Web Design - Web Development</h4>
                <div className="buttons">
                    <Link to="/work">Check my work</Link>
                    <Link to="/contact">Contact me</Link>
                </div>
            </div>
        </div>
    </>
)

export default Homepage
