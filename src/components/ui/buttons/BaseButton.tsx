import type { BaseButtonProps } from "../../../engine/types";

export function BaseButton({
	children,
	className = "",
	disabled = false,
	...props
}: BaseButtonProps) {
	return (
		<button
			disabled={disabled}
			className={`px-4 py-2 rounded text-white transition ${
				disabled ? "bg-gray-400 opacity-50 cursor-not-allowed" : ""
			} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
