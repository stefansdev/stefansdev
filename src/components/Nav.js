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
                <AniLink
                    cover
                    direction="right"
                    to="/"
                    bg="#222228"
                    activeClassName="is_active"
                >
                    Home
                </AniLink>
            </li>
            <li>
                <AniLink
                    cover
                    to="/about"
                    bg="#222228"
                    activeClassName="is_active"
                >
                    ABOUT
                </AniLink>
            </li>
            <li>
                <Link activeClassName="is_active" to="/work">
                    WORK
                </Link>
            </li>
            <li>
                <Link activeClassName="is_active" to="/contact">
                    CONTACT
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav
