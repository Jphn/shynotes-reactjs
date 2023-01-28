import { globalCss } from '@stitches/react';
import NoteNavbar from '../layouts/NoteNavbar';
import TextArea from '../layouts/TextArea';

const globalStyles = globalCss({
	body: {
		overflow: 'hidden',
	},
});

export default function () {
	globalStyles();

	return (
		<>
			<NoteNavbar />
			<TextArea />
		</>
	);
}
