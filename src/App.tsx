import { useState } from "react";
import { CanvasView } from "./components";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

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
