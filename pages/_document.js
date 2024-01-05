import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-US">
				<Head />
				<body className="">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
