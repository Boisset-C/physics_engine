import { useRef, useEffect } from "react";
import { Rectangle } from "../engine/entities/Rectangle";
import type { Shape } from "../engine/types";

// Canvas Component
export function Canvas({ isRunning }: { isRunning: boolean }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const shapesRef = useRef<Shape[]>([
		new Rectangle("firstRect", 50, 50, 100, 80, "red"),
		new Rectangle("secondRect", 200, 100, 120, 60, "blue"),
	]);
	const animationRef = useRef<number | null>(null);
	const draggingShapeRef = useRef<Shape | null>(null);
	const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let frame = 0;

		const render = () => {
			frame++;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			shapesRef.current.forEach((shape) => shape.draw(ctx));

			animationRef.current = requestAnimationFrame(render);
		};

		const getMousePos = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			return {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			};
		};

		const handleMouseDown = (e: MouseEvent) => {
			const { x, y } = getMousePos(e);
			for (const shape of shapesRef.current) {
				if (shape.contains(x, y)) {
					console.log("Clicked on", shape);
					const pos = shape.getPosition();
					draggingShapeRef.current = shape;
					dragOffset.current = {
						x: x - pos.y,
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

		// Cleanup
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			canvas.removeEventListener("mousedown", handleMouseDown);
		};
	}, [isRunning]);

	return (
		<canvas
			className="border border-solid border-white-50"
			ref={canvasRef}
			width={800}
			height={500}
		/>
	);
}
