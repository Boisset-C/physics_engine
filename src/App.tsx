import { ScreenView } from "./components/screen";
import "./App.css";

function App() {
	return (
		<>
			<h1 className="text-3xl font-bold underline">PHYSICS ENGINE</h1>
			<div className="card">
				<ScreenView />
			</div>
		</>
	);
}

export default App;
