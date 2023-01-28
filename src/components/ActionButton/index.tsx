import { Button } from './style';

export interface IActionButtonProps {
	label: string;
	action: () => void;
}

export default function ({ label, action }: IActionButtonProps) {
	return <Button onClick={action}>{label}</Button>;
}
