import { Screen } from "../components/ui/screen/index";
import { useSimulationControls } from "../hooks/useSimulationControls";
import { SimulationControlPanel } from "../components/controls/simulationControlPanel";

export function HomeView() {
	const { isRunning, handleStart, handlePause, handleReset } =
		useSimulationControls();

	return (
		<div className="flex flex-col items-center gap-4 p-4 ">
			<Screen isRunning={isRunning} />
			<SimulationControlPanel
				isRunning={isRunning}
				onStart={handleStart}
				onPause={handlePause}
				onReset={handleReset}
			/>
		</div>
	);
}
