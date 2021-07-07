import React from 'react';

const SectionTitle = ({ titleStroke, titleNormal, subtitle }) => (
	<div className="text-center">
		<h3 className="uppercase text-4xl leading-10 font-extrabold mb-4">
			<span className="text-stroke text-white">{titleStroke}</span> {titleNormal}
		</h3>
		<h4 className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400">{subtitle}</h4>
	</div>
);

export default SectionTitle;
