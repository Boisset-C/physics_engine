import { useRef } from "react";
import { Rectangle } from "../../../engine/entities/index";
import type { Shape } from "../../../engine/types/index";
import { useScreenLogic } from "../../../hooks";

//Screen
export function Screen({ isRunning }: { isRunning: boolean }) {
	const screenRef = useRef<HTMLCanvasElement>(null);
	const shapesRef = useRef<Shape[]>([
		new Rectangle("firstRect", 50, 50, 100, 80, "red"),
		new Rectangle("secondRect", 200, 100, 120, 60, "blue"),
	]);

	useScreenLogic(screenRef, shapesRef, isRunning);

	return (
		<canvas
			className="border border-solid border-white-50"
			ref={screenRef}
			width={800}
			height={500}
		/>
	);
}
