import React from 'react';

const HeroAnimation = () => (
	<div className="absolute top-[300px] left-[230px] w-[300px] height-[300px] opacity-40">
		<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter  blur-xl animate-blob" />
		<div className="absolute top-20 -right-6 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter  blur-xl animate-blob animation-delay-2000" />
		<div className="absolute top-0 -bottom-4 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter  blur-xl animate-blob animation-delay-4000" />
	</div>
);

export default HeroAnimation;
