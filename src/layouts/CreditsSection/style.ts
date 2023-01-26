import { styled } from '@stitches/react';

export const CreditsWrapper = styled('footer', {
	border: 'red solid 2px', // Debug

	width: '100vw',
	maxWidth: '100%',
	height: 'fit-content',

	padding: '1rem',

	display: 'flex',
	flexDirection: 'column',
	gap: '1.2rem',
	alignItems: 'center',
});

export const Header = styled('h2', {
	fontSize: '3.2rem',
});

export const Quote = styled('p', {
	fontSize: '1.4rem',
});

export const SocialWrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
});

export const CopyrightText = styled('p', {
	fontSize: '1.4rem',
});
