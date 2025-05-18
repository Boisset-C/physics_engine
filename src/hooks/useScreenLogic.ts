import { useEffect, useRef } from "react";
import type { Shape, Position } from "../engine/types";

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
	const dragOffset = useRef<Position>({
		coordinateX: 0,
		coordinateY: 0,
		unit: null,
	});

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
		const getMousePos = (e: MouseEvent): Position => {
			const rect = canvas.getBoundingClientRect();
			return {
				coordinateX: e.clientX - rect.left,
				coordinateY: e.clientY - rect.top,
				unit: null,
			};
		};

		const handleMouseDown = (e: MouseEvent) => {
			const { coordinateX, coordinateY } = getMousePos(e);
			for (const shape of shapes.current ?? []) {
				if (shape.contains({ coordinateX, coordinateY, unit: null })) {
					const pos = shape.getPosition();
					draggingShapeRef.current = shape;
					dragOffset.current = {
						coordinateX: coordinateX - pos.coordinateX,
						coordinateY: coordinateY - pos.coordinateY,
						unit: null,
					};
					break;
				}
			}
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!draggingShapeRef.current) return;
			const { coordinateX, coordinateY } = getMousePos(e);
			const offset = dragOffset.current;
			draggingShapeRef.current.setPosition({
				coordinateX: coordinateX - offset.coordinateX,
				coordinateY: coordinateY - offset.coordinateY,
				unit: null,
			});
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
			canvas.removeEventListener("mousedown", handleMouseDown);
			canvas.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("mouseup", handleMouseUp);
		};
	}, [screenRef, shapes, isRunning]);
}
