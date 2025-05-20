import type { SimulationControls } from "../../engine/types/index";
import { Button } from "../ui/buttons";

export function SimulationControlPanel({
	isRunning,
	onStart,
	onPause,
	onReset,
}: SimulationControls) {
	return (
		<div className="flex gap-2">
			<Button onClick={onStart} label="Start" disabled={isRunning} />
			<Button onClick={onPause} label="Pause" disabled={!isRunning} />
			<Button onClick={onReset} label="Reset" />
		</div>
	);
}
