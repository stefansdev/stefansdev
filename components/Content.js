import Blocks from 'editorjs-blocks-react-renderer';
import Image from 'next/image';

const Images = ({ data }) => (
	<Image src={data.file.url} alt={data.caption || ''} width={data.file.width} height={data.file.height} />
);

const NestedList = ({ data }) => (
	<ul>
		{data.items.map((item, index) => (
			<li key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
		))}
	</ul>
);

const Content = ({ content, fullWidth = false, className = '' }) => (
	<div className={`prose ${fullWidth ? 'max-w-none' : 'max-w-[70ch]'} ${className}`}>
		<Blocks
			data={content}
			config={{ image: {}, nestedlist: {} }}
			renderers={{ image: Images, nestedlist: NestedList }}
		/>
	</div>
);

export default Content;
