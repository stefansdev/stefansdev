import React from 'react'
import Instagram from './images/instagram'
import Twitter from './images/twitter'

const SocialSidebar = () => (
    <ul className="social_sidebar">
        <li>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Instagram />
            </a>
        </li>
        <li>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Twitter />
            </a>
        </li>
    </ul>
)

export default SocialSidebar
