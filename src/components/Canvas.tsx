import { useRef, useEffect } from "react";

//CANVAS COMPONENT SCREEN
export function Canvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		//drawing logic
		ctx.fillStyle = "skyblue";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "black";
		ctx.fillText("Hello Canvas", 10, 50);
	}, []);

	return <canvas ref={canvasRef} width={500} height={300} />;
}
