import type { ButtonProps } from "../../../engine/types";
import { BaseButton } from "./BaseButton";

//Can be used at all times unlike RuntimeButton doesn't depend on Runtime.
export function Button({ label, onClick, disabled }: ButtonProps) {
	return (
		<BaseButton
			onClick={onClick}
			className="bg-blue-500 hover:bg-blue-600"
			disabled={disabled}
		>
			{label}
		</BaseButton>
	);
}
