import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-US">
				<Head />
				<body className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white pt-16">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
