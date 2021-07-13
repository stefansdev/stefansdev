import { getRecentBlogs, getPostBySlug } from '../../../utils/blog';

export default function post(req, res) {
	const { slug } = req.query;
	const singlePost = getPostBySlug(slug);
	console.log(singlePost);
	if (singlePost) {
		res.status(200).json({ ...singlePost });
	} else {
		res.status(404).json({ message: 'Post Not found!' });
	}
}
