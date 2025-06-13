import type { RuntimeButtonProps } from "../../../engine/types";
import { BaseButton } from "./BaseButton";

//Can NOT be used at all times unlike Button, depends on runtime
export function RuntimeButton({
	label,
	onClick,
	isRunning,
}: RuntimeButtonProps) {
	return (
		<BaseButton
			onClick={isRunning ? onClick : undefined}
			disabled={!isRunning}
			className="bg-green-500 hover:bg-green-600"
		>
			{label}
		</BaseButton>
	);
}
