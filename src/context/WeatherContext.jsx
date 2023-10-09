import { createContext, useState, useContext, useEffect } from 'react';
import useWeatherInfo from '../hooks/useWeatherInfo';

const weatherInformation = createContext();

export function useWetherFullInformation() {
	return useContext(weatherInformation);
}

export function WeatherContext({ children }) {
	const weatherData = useWeatherInfo();
	const [information, setInformation] = useState(null);

	useEffect(() => {
		setInformation(weatherData);
	}, [weatherData]);

	return (
		<weatherInformation.Provider value={information}>
			{children}
		</weatherInformation.Provider>
	);
}
