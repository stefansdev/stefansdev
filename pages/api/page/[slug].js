import { getPageBySlug } from '../../../utils/blog';

export default function post(req, res) {
	const { slug } = req.query;
	try {
		const singlePage = getPageBySlug(slug);
		res.status(200).json({ ...singlePage });
	} catch (error) {
		res.status(404).json({
			message: 'Error 404: Page you are looking for I havent created! Double check the slug!',
		});
	}
}
