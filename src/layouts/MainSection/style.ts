import { styled } from '@stitches/react';
import ArrowSvg from '../../assets/ArrowSvg';
import Colors from '../../styles/Colors';

export const MainWrapper = styled('main', {
	display: 'flex',
	position: 'relative',
	justifyContent: 'center',
	alignItems: 'center',

	width: '100vw',
	height: '100vh',
	maxWidth: '100%',

	backgroundColor: Colors.lighter,
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
	color: Colors.green,
});

export const SubheaderWrapper = styled('div', {
	width: '100%',
});

export const SubheaderText = styled('p', {
	fontSize: '2rem',
	width: '100%',
	textAlign: 'center',
	fontWeight: 'lighter',
});

export const NoteNameWrapper = styled('form', {
	width: '100%',
	height: '3.5rem',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: '0.3rem',
});

export const NoteNameInput = styled('input', {
	width: '80%',
	height: '100%',
	padding: '0 0 0 1rem',

	borderRadius: '0.7rem',
	borderColor: Colors.green,
	borderStyle: 'solid',
	borderWidth: '0.2rem',
	outline: 'none',
});

export const NoteNameButton = styled('button', {
	width: '20%',
	height: '100%',

	borderRadius: '0.7rem',
	borderColor: Colors.green,
	borderStyle: 'solid',
	borderWidth: '0.2rem',
	backgroundColor: 'transparent',

	color: Colors.green,
	fontSize: '1.7rem',
	fontWeight: 'bold',

	'&:hover': {
		backgroundColor: Colors.green,
		color: Colors.lighter,
	},
});

export const StyledArrowSvg = () =>
	ArrowSvg({
		style: {
			width: '4rem',
			height: '4rem',
			position: 'absolute',
			bottom: '0',
			fill: Colors.green,
			cursor: 'pointer',
		},
	});
