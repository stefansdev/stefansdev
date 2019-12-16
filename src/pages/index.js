import React from "react"
import Animoji from '../images/animoji.jpg'
import SEO from "../components/seo"
import '../style/app.scss'


const IndexPage = () => (
	<>
		<SEO title="Stefan Stankovic , stefans.dev | Web Design and Development" />
		<section className="hero">
			<div className="content">
				<h1>Stefan Stankovic</h1>
				<h2>Web Design & Development</h2>

				<div className="avatar">
					<img src={Animoji} alt="stefansdev" />
				</div>

				<ul>
					<li>
						<a href="mailto:s@stefans.dev" target="_blank" rel="noopener noreferrer">
							email
						</a>
					</li>
					<li>
						<a href="https://twitter.com/st3f4ns" target="_blank" rel="noopener noreferrer">
							twitter
						</a>
					</li>
					<li>
						<a href="https://instagram.com/stefans.dev" target="_blank" rel="noopener noreferrer">
							instagram
						</a>
					</li>
				</ul>

			</div>
		</section>
	</>
)

export default IndexPage
