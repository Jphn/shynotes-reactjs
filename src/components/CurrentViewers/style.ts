import { styled } from '@stitches/react';

export const CurrentViewersWrapper = styled('div', {
	display: 'flex',
	minWidth: 'fit-content',
	minHeight: '100%',
	alignItems: 'center',
	gap: '0.7rem',
});

export const EyeIcon = styled('img', {
	width: '2.7rem',
});

export const ViewersCount = styled('span', {
	fontSize: '1.5rem',
});
