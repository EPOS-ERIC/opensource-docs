import { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function RemoteCodeBlock({ url, language }) {
	const [content, setContent] = useState('Loading...');

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.text();
			})
			.then((text) => setContent(text))
			.catch((error) => {
				setContent(`Error fetching code: ${error.message}`)
				console.error('Error fetching code:', error);
			});
	}, [url]);

	return (
		<CodeBlock language={language}>
			{content}
		</CodeBlock>
	);
}
