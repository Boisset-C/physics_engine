import { useRef, useEffect } from "react";

//CANVAS COMPONENT SCREEN
export function Canvas({ isRunning }: { isRunning: boolean }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let frame = 0;

		const render = () => {
			frame++;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Example drawing: animated circle
			ctx.fillStyle = "skyblue";
			ctx.beginPath();
			ctx.arc(50 + (frame % 500), 100, 20, 0, Math.PI * 2);
			ctx.fill();

			animationRef.current = requestAnimationFrame(render);
		};

		if (isRunning) {
			render();
		} else {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		}

		// Cleanup when unmounting or stopping
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [isRunning]);

	return <canvas ref={canvasRef} width={800} height={500} />;
}
