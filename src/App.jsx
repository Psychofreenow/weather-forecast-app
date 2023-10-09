import './app.css';
import InformationSummary from './components/InformationSummary';
import WeekSummary from './components/WeekSummary';
import { WeatherContext } from './context/weatherContext';

function App() {
	return (
		<>
			<main className='main'>
				<WeatherContext>
					{/* <h1>Weather forecast app</h1> */}
					<InformationSummary />
					<WeekSummary />
				</WeatherContext>
			</main>
		</>
	);
}

export default App;
