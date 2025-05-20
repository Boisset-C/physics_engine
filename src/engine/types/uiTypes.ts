import type { ButtonHTMLAttributes, ReactNode } from "react";

export type BaseButtonProps = {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	label: string;
	onClick: () => void;
	disabled?: boolean;
};

export type RuntimeButtonProps = {
	label: string;
	onClick: () => void;
	isRunning: boolean;
};
