import SocialBadge from '../../components/SocialBadge';
import {
	CopyrightText,
	CreditsWrapper,
	Header,
	Quote,
	SocialWrapper,
} from './style';
import InstagramSrc from '../../assets/instagram.svg';

export default function () {
	return (
		<CreditsWrapper>
			<Header>shyNotes</Header>

			<Quote>"Dedication is a talent all on it's own."</Quote>

			<SocialWrapper>
				<SocialBadge
					src={InstagramSrc}
					href="https://www.google.com.br"
				/>
				<SocialBadge
					src={InstagramSrc}
					href="https://www.google.com.br"
				/>
				<SocialBadge
					src={InstagramSrc}
					href="https://www.google.com.br"
				/>
			</SocialWrapper>

			<CopyrightText>
				Made by @Jphn. {new Date().getFullYear()} shyNotes.
			</CopyrightText>
		</CreditsWrapper>
	);
}
