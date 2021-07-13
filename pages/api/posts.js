import { getAllPosts } from '../../utils/blog';

export default function posts(req, res) {
	const allPosts = getAllPosts();
	res.status(200).json({ allPosts });
}
