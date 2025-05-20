import { HomeView } from "./pages/index";
import "./App.css";

function App() {
	return (
		<>
			<h1 className="text-3xl font-bold underline">PHYSICS ENGINE</h1>
			<div className="card">
				<HomeView />
			</div>
		</>
	);
}

export default App;
