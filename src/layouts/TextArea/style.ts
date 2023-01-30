import { styled } from '@stitches/react';
import Colors from '../../styles/Colors';

export const FullScreenTextarea = styled('textarea', {
	width: '100%',
	maxWidth: '100%',
	minHeight: '95vh',

	padding: '0.7rem',

	border: 'none',
	resize: 'none',
	outline: 'none',

	fontSize: '1.7rem',

	backgroundColor: Colors.lighter,
});
