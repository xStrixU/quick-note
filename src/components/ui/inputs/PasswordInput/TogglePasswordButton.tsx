import { BiHide, BiShow } from 'react-icons/bi';

type TogglePasswordButtonProps = Readonly<{
	isPasswordShown: boolean;
	onClick: () => void;
}>;

export const TogglePasswordButton = ({
	isPasswordShown,
	onClick,
}: TogglePasswordButtonProps) => (
	<button
		type="button"
		tabIndex={-1}
		aria-hidden
		onClick={onClick}
		className="h-full px-2"
	>
		{isPasswordShown ? <BiShow size={18} /> : <BiHide size={18} />}
	</button>
);
