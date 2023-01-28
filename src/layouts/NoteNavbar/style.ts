import { styled } from '@stitches/react';

export const Header = styled('header', {
	width: '100vw',
	maxWidth: '100%',
	height: '5vh',
	padding: '1rem',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const Nav = styled('nav', {
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1rem',
});

export const Container = styled('div', {
	display: 'flex',
	gap: '2.5rem',
	justifyContent: 'center',
	alignItems: 'center',

	minWidth: 'fit-content',
	height: 'min(100%)',
});
