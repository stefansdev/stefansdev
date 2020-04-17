import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import MailICon from '../images/icons/mail'

const Nav = () => (
    <nav>
        <Link to="/" className="logo">
            STEFANS.DEV
        </Link>
        <ul>
            <li>
                <AniLink
                    cover
                    direction="right"
                    to="/"
                    bg="#232327"
                    activeClassName="is_active"
                >
                    Home
                </AniLink>
            </li>
            <li>
                <AniLink
                    cover
                    to="/about"
                    bg="#232327"
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
                <Link activeClassName="is_active" to="/uses">
                    USES
                </Link>
            </li>
            <li>
                <Link activeClassName="is_active" to="/contact">
                    CONTACT
                </Link>
            </li>
        </ul>
        <a href="mailto:s@stefans.dev" className="contact_email">
            <MailICon />
        </a>
    </nav>
)

export default Nav
