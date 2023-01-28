import { globalCss } from '@stitches/react';

export default globalCss({
	'@import': [
		"url('https://fonts.googleapis.com/css2?family=Fragment+Mono&display=swap')",
	],

	'*': {
		margin: '0',
		padding: '0',
		boxSizing: 'border-box',
		listStyle: 'none',
		textDecoration: 'none',

		fontFamily: "'Fragment Mono', monospace",
	},

	html: {
		fontSize: '62.5%',
		scrollBehavior: 'smooth',
		maxWidth: '100vw',

		'@media screen and (max-width: 580px)': {
			fontSize: '50.2%',
		},
	},

	img: {
		maxWidth: '100%',
		display: 'block',
	},

	button: {
		cursor: 'pointer',
	},
});
