import { useEffect, useRef } from "react";
import type { Shape } from "../engine/types";

/* 
For now handles three jobs:
1. Drawing shapes
2. Animation
3. Mouse interaction
*/
export function useScreenLogic(
	screenRef: React.RefObject<HTMLCanvasElement | null>,
	shapes: React.RefObject<Shape[]>,
	isRunning: boolean
) {
	const animationRef = useRef<number | null>(null);
	const draggingShapeRef = useRef<Shape | null>(null);
	const dragOffset = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const canvas = screenRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let frame = 0;

		//draw shapes
		const render = () => {
			frame++;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			shapes.current?.forEach((shape: Shape) => shape.draw(ctx));
			animationRef.current = requestAnimationFrame(render);
		};

		//mouse events
		const getMousePos = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			return {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			};
		};

		const handleMouseDown = (e: MouseEvent) => {
			const { x, y } = getMousePos(e);
			for (const shape of shapes.current ?? []) {
				if (shape.contains(x, y)) {
					const pos = shape.getPosition();
					draggingShapeRef.current = shape;
					dragOffset.current = {
						x: x - pos.x,
						y: y - pos.y,
					};
					break;
				}
			}
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!draggingShapeRef.current) return;
			const { x, y } = getMousePos(e);
			const offset = dragOffset.current;
			draggingShapeRef.current.setPosition(x - offset.x, y - offset.y);
		};

		const handleMouseUp = () => {
			draggingShapeRef.current = null;
		};

		if (isRunning) {
			render();
		}

		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			canvas.addEventListener("mousedown", handleMouseDown);
			canvas.addEventListener("mousemove", handleMouseMove);
			canvas.addEventListener("mouseup", handleMouseUp);
		};
	}, [screenRef, shapes, isRunning]);
}
