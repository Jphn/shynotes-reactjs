import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formatNoteName from '../../utils/formatNoteName';
import {
	Header,
	HeaderWrapper,
	MainWrapper,
	NoteNameButton,
	NoteNameInput,
	NoteNameWrapper,
	StyledArrowSvg,
	SubheaderText,
	SubheaderWrapper,
} from './style';

export default function () {
	const navigate = useNavigate();

	const [noteName, setNoteName] = useState('');

	const actions = {
		handleSubmit(e: FormEvent<HTMLFormElement>) {
			e.preventDefault();

			let notePath = formatNoteName(noteName);

			navigate(`/${notePath}`);
		},
		handleChange(e: React.ChangeEvent<HTMLInputElement>) {
			setNoteName(e.target.value);
		},
	};

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

				<NoteNameWrapper onSubmit={actions.handleSubmit}>
					<NoteNameInput
						type="text"
						placeholder="Note name..."
						value={noteName}
						onChange={actions.handleChange}
					/>
					<NoteNameButton type="submit">Go!</NoteNameButton>
				</NoteNameWrapper>
			</HeaderWrapper>

			<StyledArrowSvg />
		</MainWrapper>
	);
}
