import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';

const About = () => (
	<>
		<Seo
			title="About | Stefan Stankovic - Full Stack Javascript Developer"
			description="Full Stack Javascript Developer"
		/>
		<Header />
		<div className="container max-w-7xl mx-auto py-28">
			<div className="grid grid-cols-2 gap-12 items-center">
				<div className="relative rounded-lg overflow-hidden h-[480px]">
					<Image src="/stefans_image_with_bg.jpg" layout="fill" objectFit="cover" alt="stefans.dev" />
				</div>
				<div className="relative">
					<PageTitle titleStroke="Stefan" title="Stankovic" subtitle="About" />
					<div className="text-gray-600 dark:text-gray-200 font-light">
						<p className="mb-4">My name is Stefan Stankovic. I’m from Belgrade, Serbia.</p>
						<p className="mb-4">
							I’m 27 years old and I’ve been making websites since I was 18 years old. Proffesionaly from
							2013.
						</p>
						<p className="mb-4">
							I’m primarily working with Javascript and Headless / Jamstack stack nowadays, but also have
							a lot of experience with custom theme development for Wordress , Shopify, etc...
						</p>
						<p>Frontend development, UI/UX , CSS/JS is what I’m strongest with and love the most.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="container mx-auto max-w-4xl pb-28 ">
			<div className="prose dark:prose-dark">
				<h3>Early times - How I started</h3>
				<p>
					I initialy got in touch in the times when forums were popular. I use to own couple biggest gaming
					communities in my teenage days and I forums were really popular back then. I would install forum and
					tweak around, style it, install plugins, create icons, backgrounds, logos in photoshop. And thats
					how it all started, I knew what I want to do in life. Good times!
				</p>
				<p>
					Initial experience in community organization, leading teams and events got from those gaming
					communities. Initialy, smaller Counter Strike communities, but later I have created biggest gaming
					community on Balkan - LoLSerbia (League of Legends community). We had huge online/LAN events. I
					would manage tournaments with 250+ teams of 5 players. More then thousand people would play
					tournament over a weekend.
				</p>
				<p>
					While organizing all that I wanted to make proper websites for those communities and not just edit
					and scrap the surface. So, got interested and did a research on whats the best way. I found out
					about those short web development courses / bootcamps and it seemed interesting. And, as soon as I
					have finished high school i signed up and moved to Belgrade. After each course I coudnt wait to come
					home and try the new things I have learned. It helped a lot.
				</p>
				<h3>Proffesinal career - a story</h3>
				<p>
					Right after I have finished courses, I started my internship at DooApp. Stayed in the same company
					for around 15 months and left to try myself in freelance world. Even tho I knew to code, i didnt
					know nothing about freelance and running business. It was hard finding new clients and projects and
					even the ones I had I didnt manage properly. So, again , had to find a job in some company.
				</p>
				<p>
					Found a job at Makonda, small company in Belgrade. Dream job - awesome people, awesome environment,
					was learning, growing, everything perfect.
				</p>
				<p>
					But It wasnt enough for me, I still wanted more. At the time when I was in gaming and esports I met
					with Aleksandar, we worked for couple years together. One time we were sitting and talking about web
					development and we came to idea to open our company. Idea was intersting, i always wanted that. So,
					we did exactly that. That was the summer 2016. We got big esports clients right away and I was
					working in Makonda and Singular Minds at the same time.
				</p>
				<p>
					That lasted for a couple months and I had to leave Makonda and work full time in Singular Minds. We
					grew rapidly, had to expand and hire new people. We delivered good products to clients, but we were
					still learning a lot while growing. Especialy the business side.
				</p>
				<p>
					I’m now Co-Founder & Lead Web Developer and Singular Minds. I’m also working on couple side projects
					i feel passionate about, write about my experienced in development, tech, record short how-to videos
					and try to help other devs.
				</p>
				<h3>Interests</h3>
				<p>
					First place belongs to frontend development. I love to learning new stuff, solve people’s
					problems... I’m also passionate about design, UI / UX. I’m a tech lover, love everything about it.
				</p>
				<h3>Sports</h3>
				<p>
					I used to play futsal a lot as a kid. Still love it and try to play at least once a week. Other days
					I’m going for a run.
				</p>
			</div>
		</div>
		<Footer />
	</>
);

export default About;

export async function getStaticProps() {
	return {
		props: {},
	};
}
