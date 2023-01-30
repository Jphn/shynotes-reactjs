import { CurrentViewersWrapper, CustomEyeSvg, ViewersCount } from './style';

export default function () {
	return (
		<CurrentViewersWrapper>
			<CustomEyeSvg />
			<ViewersCount>0</ViewersCount>
		</CurrentViewersWrapper>
	);
}
