import type { ButtonProps } from "../../../engine/types";
import { BaseButton } from "./BaseButton";

export function Button({ label, onClick }: ButtonProps) {
	return (
		<BaseButton onClick={onClick} className="bg-blue-500 hover:bg-blue-600">
			{label}
		</BaseButton>
	);
}
