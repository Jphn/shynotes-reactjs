import EyeSrc from '../../assets/view.svg';
import { CurrentViewersWrapper, EyeIcon, ViewersCount } from './style';

export default function () {
	return (
		<CurrentViewersWrapper>
			<EyeIcon src={EyeSrc} />
			<ViewersCount>0</ViewersCount>
		</CurrentViewersWrapper>
	);
}
