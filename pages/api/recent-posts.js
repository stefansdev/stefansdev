import { getRecentBlogs } from '../../utils/blog';

export default function posts(req, res) {
	const recentPosts = getRecentBlogs();
	res.status(200).json({ recentPosts });
}
