import { styled } from '@stitches/react';

export const MainWrapper = styled('main', {
	display: 'flex',
	position: 'relative',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100vw',
	height: '100vh',
	maxWidth: '100%',
});

export const HeaderWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: 'fit-content',
	height: 'fit-content',
	gap: '2.7rem',
});

export const Header = styled('h1', {
	fontSize: '8rem',
});

export const SubheaderWrapper = styled('div', {
	width: '100%',
});

export const SubheaderText = styled('p', {
	fontSize: '2rem',
	width: '100%',
	textAlign: 'center',
});

export const NoteNameWrapper = styled('div', {
	width: 'min(100%)',
	height: '3.5rem',
});

export const NoteNameInput = styled('input', {
	width: '80%',
	height: '100%',
	padding: '1rem',
});

export const NoteNameButton = styled('button', {
	width: '20%',
	height: '100%',
});

export const ArrowImg = styled('img', {
	width: '4rem',
	position: 'absolute',
	bottom: '0',
});
