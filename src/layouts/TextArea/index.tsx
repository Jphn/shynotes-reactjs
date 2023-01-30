import { FullScreenTextarea } from './style';

export default function () {
	const actions = {
		handleTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
			if (e.key !== 'Tab') return;

			e.preventDefault();

			let start = e.currentTarget.selectionStart;
			let end = e.currentTarget.selectionEnd;

			e.currentTarget.value =
				e.currentTarget.value.substring(0, start) +
				'\t' +
				e.currentTarget.value.substring(end);

			e.currentTarget.selectionStart = e.currentTarget.selectionEnd + 1;
		},
	};

	return (
		<FullScreenTextarea
			autoFocus
			onKeyDown={actions.handleTab}
			spellCheck="false"
		></FullScreenTextarea>
	);
}
