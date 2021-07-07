import React from 'react';

const SectionTitle = ({ titleStroke, titleNormal, subtitle }) => (
	<div className="text-center pb-12">
		<h3 className="uppercase text-4xl leading-10 font-extrabold mb-4">
			<span className="text-stroke text-white dark:text-stroke-white dark:text-gray-800">{titleStroke}</span>{' '}
			{titleNormal}
		</h3>
		<h4 className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400">{subtitle}</h4>
	</div>
);

export default SectionTitle;
