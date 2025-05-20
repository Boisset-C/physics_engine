import { useState } from "react";

export function useSimulationControls() {
	const [isRunning, setIsRunning] = useState(false);

	const handleStart = () => {
		setIsRunning(true);
		console.log("Simulation started");
	};

	const handlePause = () => {
		setIsRunning(false);
		console.log("Simulation stopped");
	};

	const handleReset = () => {
		setIsRunning(false);
		console.log("Simulation reset");
		// Add actual reset logic if needed
	};

	return {
		isRunning,
		handleStart,
		handlePause,
		handleReset,
	};
}
