import { styled } from '@stitches/react';
import EyeSvg from '../../assets/EyeSvg';
import Colors from '../../styles/Colors';

export const CurrentViewersWrapper = styled('div', {
	display: 'flex',
	minWidth: 'fit-content',
	minHeight: '100%',
	alignItems: 'center',
	gap: '0.7rem',
});

export const ViewersCount = styled('span', {
	fontSize: '1.5rem',
});

export const CustomEyeSvg = () =>
	EyeSvg({
		style: {
			width: '2.7rem',
			height: '2.7rem',
			fill: Colors.darker,
		},
	});
