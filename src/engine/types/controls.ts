//basic controls
export type SimulationControls = {
	isRunning: boolean;
	onStart: () => void;
	onPause: () => void;
	onReset: () => void;
};
