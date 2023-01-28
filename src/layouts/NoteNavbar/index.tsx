import ActionButton from '../../components/ActionButton';
import ClickableLogo from '../../components/ClickableLogo';
import CurrentViewers from '../../components/CurrentViewers';
import { Container, Header, Nav } from './style';

export default function () {
	return (
		<Header>
			<Container>
				<CurrentViewers />

				<Nav>
					<ActionButton
						label="Delete"
						action={() => console.log('[Action] Delete note.')}
					/>
					<ActionButton
						label="Share"
						action={() => console.log('[Action] Share note.')}
					/>
					<ActionButton
						label="Download"
						action={() => console.log('[Action] Download note.')}
					/>
				</Nav>
			</Container>

			<Container>
				<ClickableLogo />
			</Container>
		</Header>
	);
}
