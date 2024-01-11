import Blocks from 'editorjs-blocks-react-renderer';
import Image from 'next/image';

const Images = ({ data }) => (
	<Image src={data.file.url} alt={data.caption} width={data.file.width} height={data.file.height} />
);

const NestedList = ({ data }) => (
	<ul>
		{data.items.map((item, index) => (
			<li
				key={index}
				dangerouslySetInnerHTML={{
					__html: item.content,
				}}
			/>
		))}
	</ul>
);

const Content = ({ content, fullWidth }) => (
	<div className={`prose mx-auto px-3 ${fullWidth && 'max-w-full'} prose-headings:font-headings`}>
		<Blocks
			data={content}
			config={{
				image: {},
				nestedlist: {},
			}}
			renderers={{
				image: Images,
				nestedlist: NestedList,
			}}
		/>
	</div>
);
export default Content;
