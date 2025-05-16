import { CanvasView } from "./components";
import "./App.css";

function App() {
	return (
		<>
			<h1 className="text-3xl font-bold underline">PHYSICS ENGINE</h1>
			<div className="card">
				<CanvasView />
			</div>
		</>
	);
}

export default App;
