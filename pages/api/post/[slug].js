import { getPostBySlug } from '../../../utils/blog';

export default function post(req, res) {
	const { slug } = req.query;
	try {
		const singlePost = getPostBySlug(slug);
		res.status(200).json({ ...singlePost });
	} catch (error) {
		res.status(404).json({
			message: 'Error 404: Post you are looking for I havent created! Double check the slug!',
		});
	}
}
