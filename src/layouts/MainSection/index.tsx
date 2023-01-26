import {
	MainWrapper,
	HeaderWrapper,
	Header,
	SubheaderWrapper,
	SubheaderText,
	NoteNameInput,
	NoteNameButton,
	NoteNameWrapper,
	ArrowImg,
} from './style';
import ArrowSrc from '../../assets/arrow.svg';

export default function () {
	return (
		<MainWrapper>
			<HeaderWrapper>
				<Header>shyNotes</Header>

				<SubheaderWrapper>
					<SubheaderText>Create simple private notes.</SubheaderText>
					<SubheaderText>
						Share them to anyone, anywhere.
					</SubheaderText>
					<SubheaderText>This is shyNotes.</SubheaderText>
				</SubheaderWrapper>

				<NoteNameWrapper>
					<NoteNameInput
						type="text"
						placeholder="Note name..."
					/>
					<NoteNameButton>Go!</NoteNameButton>
				</NoteNameWrapper>
			</HeaderWrapper>

			<ArrowImg src={ArrowSrc} />
		</MainWrapper>
	);
}
