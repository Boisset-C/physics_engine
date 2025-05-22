import { useEffect, useRef } from "react";
import type { Shape, Position } from "../engine/types";
import { simulationSettings } from "../engine/globals/simulationSettings";

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
	const gravity = simulationSettings.gravity;
	const animationRef = useRef<number | null>(null);
	const draggingShapeRef = useRef<Shape | null>(null);
	const dragOffset = useRef<Position>({
		Xcoordinate: 0,
		Ycoordinate: 0,
	});

	useEffect(() => {
		const canvas = screenRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let lastTime = performance.now();

		//draw shapes
		const render = (now: number) => {
			const deltaTime = (now - lastTime) / 1000;
			lastTime = now;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			shapes.current?.forEach((shape: Shape) => {
				//update object velocity with gravity
				shape.velocity = gravity.applyTo(shape.velocity, deltaTime);
				//DEBUG LOG
				console.log(
					"Velocity:",
					shape.velocity.magnitude,
					shape.velocity.direction
				);
				console.log("Position:", shape.getPosition());

				//update position with velocity
				const currentPosition = shape.getPosition();
				const { x: dx, y: dy } = shape.velocity.toXY();

				shape.setPosition({
					Xcoordinate: currentPosition.Xcoordinate + dx * deltaTime,
					Ycoordinate: currentPosition.Ycoordinate + dy * deltaTime,
				});

				shape.draw(ctx);
			});
			animationRef.current = requestAnimationFrame(render);
		};

		//mouse events
		const getMousePos = (e: MouseEvent): Position => {
			const rect = canvas.getBoundingClientRect();
			return {
				Xcoordinate: e.clientX - rect.left,
				Ycoordinate: e.clientY - rect.top,
			};
		};

		const handleMouseDown = (e: MouseEvent) => {
			const { Xcoordinate, Ycoordinate } = getMousePos(e);
			for (const shape of shapes.current ?? []) {
				if (shape.contains({ Xcoordinate, Ycoordinate })) {
					const pos = shape.getPosition();
					draggingShapeRef.current = shape;
					dragOffset.current = {
						Xcoordinate: Xcoordinate - pos.Xcoordinate,
						Ycoordinate: Ycoordinate - pos.Ycoordinate,
					};
					break;
				}
			}
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!draggingShapeRef.current) return;
			const { Xcoordinate, Ycoordinate } = getMousePos(e);
			const offset = dragOffset.current;
			draggingShapeRef.current.setPosition({
				Xcoordinate: Xcoordinate - offset.Xcoordinate,
				Ycoordinate: Ycoordinate - offset.Ycoordinate,
			});
		};

		const handleMouseUp = () => {
			draggingShapeRef.current = null;
		};

		if (isRunning) {
			render(lastTime);
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
