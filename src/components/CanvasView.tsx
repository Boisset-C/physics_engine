import { useState } from "react";
import { Canvas } from "./Canvas";

export function CanvasView() {
	const [isRunning, setIsRunning] = useState(false);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handlePause = () => {
		setIsRunning(false);
	};

	const handleReset = () => {
		setIsRunning(false);
		console.log("Simulation reset");
		// Add actual reset logic if needed
	};

	return (
		<div className="flex flex-col items-center gap-4 p-4 ">
			<Canvas isRunning={isRunning} />
			<div className="flex gap-2">
				<button
					onClick={handleStart}
					className="px-4 py-2 bg-green-500 text-white rounded"
				>
					Start
				</button>
				<button
					onClick={handlePause}
					className="px-4 py-2 bg-yellow-500 text-white rounded"
				>
					Pause
				</button>
				<button
					onClick={handleReset}
					className="px-4 py-2 bg-red-500 text-white rounded"
				>
					Reset
				</button>
			</div>
		</div>
	);
}
