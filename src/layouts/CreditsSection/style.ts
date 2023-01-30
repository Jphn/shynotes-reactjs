import { styled } from '@stitches/react';
import Colors from '../../styles/Colors';

export const CreditsWrapper = styled('footer', {
	width: '100vw',
	maxWidth: '100%',
	height: 'fit-content',

	padding: '1rem',

	display: 'flex',
	flexDirection: 'column',
	gap: '1.2rem',
	alignItems: 'center',

	backgroundColor: Colors.green,
});

export const Header = styled('h2', {
	fontSize: '3.2rem',
	color: Colors.middle,
});

export const Quote = styled('p', {
	fontSize: '1.5rem',
	fontStyle: 'oblique',
});

export const SocialWrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
});

export const CopyrightText = styled('p', {
	fontSize: '1.4rem',
});
