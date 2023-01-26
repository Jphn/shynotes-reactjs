import { SocialIcon, SocialLink } from './style';

export interface ISocialBadgeProps {
	src: string;
	href: string;
}

export default function ({ src, href }: ISocialBadgeProps) {
	return (
		<SocialLink
			href={href}
			target="_blank"
		>
			<SocialIcon src={src} />
		</SocialLink>
	);
}
