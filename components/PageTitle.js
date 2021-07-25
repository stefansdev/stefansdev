import React from 'react';

const PageTitle = ({ title, titleStroke, subtitle }) => (
	<>
		<div className="absolute w-full top-16 h-16 overflow-hidden z-10 dark:opacity-25 ">
			<svg
				className=""
				width={404}
				height={404}
				fill="none"
				viewBox="0 0 404 404"
				role="img"
				aria-labelledby="svg-workcation"
			>
				<title id="svg-workcation">Workcation</title>
				<defs>
					<pattern
						id="ad119f34-7694-4c31-947f-5c9d249b21f3"
						x={0}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
			</svg>
		</div>
		<div className="relative z-20 pb-16 text-center md:text-left">
			<h2 className="text-stroke text-6xl md:text-8xl font-extrabold text-white text-stroke opacity-10 absolute top-0 w-full">
				{subtitle}
			</h2>
			<h1 className="font-extrabold text-4xl md:text-5xl pt-12 md:pl-4">
				{titleStroke ? (
					<span className="text-stroke dark:text-stroke-white text-white dark:text-gray-800 ">
						{titleStroke}{' '}
					</span>
				) : (
					''
				)}
				{title || ''}
			</h1>
		</div>
	</>
);

export default PageTitle;
