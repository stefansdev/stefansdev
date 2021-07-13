import { getRecentBlogs } from '../../utils/blog';

export default function posts(req, res) {
	const allPosts = getRecentBlogs();
	res.status(200).json({ ...allPosts });
}
