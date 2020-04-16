import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Logo from './images/logo'

const Nav = () => (
    <nav>
        <Link to="/">
            <Logo />
        </Link>
        <ul>
            <li>
                <AniLink fade to="/">
                    Home
                </AniLink>
            </li>
            <li>
                <AniLink cover to="/about" bg="#222228">
                    ABOUT
                </AniLink>
            </li>
            <li>
                <Link to="/work">WORK</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </ul>
    </nav>
)

export default Nav
