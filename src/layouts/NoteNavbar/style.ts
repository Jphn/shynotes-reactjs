import { styled } from '@stitches/react';
import Colors from '../../styles/Colors';

export const Header = styled('header', {
	width: '100vw',
	maxWidth: '100%',
	height: '5vh',
	padding: '1rem',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	backgroundColor: Colors.green,
});

export const Nav = styled('nav', {
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1.5rem',
});

export const Container = styled('div', {
	display: 'flex',
	gap: '3.5rem',
	justifyContent: 'center',
	alignItems: 'center',

	minWidth: 'fit-content',
	height: 'min(100%)',
});
