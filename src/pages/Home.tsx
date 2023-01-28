import { globalCss } from '@stitches/react';
import CreditsSection from '../layouts/CreditsSection';
import MainSection from '../layouts/MainSection';

const globalStyles = globalCss({
	body: {
		overflow: 'auto',
	},
});

export default function () {
	globalStyles();

	return (
		<>
			<MainSection />
			<CreditsSection />
		</>
	);
}
