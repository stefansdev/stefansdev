import React from 'react'
import Instagram from '../images/icons/instagram'
import Twitter from '../images/icons/twitter'
import GitHub from '../images/icons/github'

const SocialSidebar = () => (
    <div className="social_sidebar">
        <ul className="social_list">
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
            <li>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub />
                </a>
            </li>
        </ul>
    </div>
)

export default SocialSidebar
