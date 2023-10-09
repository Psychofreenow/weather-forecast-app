import { useState, useEffect } from 'react';
import useGeolocation from './useGeolocation';
import { API_KEY } from '../API_KEY';

function useWeatherInfo() {
	const currentGeolocation = useGeolocation();
	const [weatherData, setWeatherData] = useState(null);
	useEffect(() => {
		if (!currentGeolocation) return;
		const { latitude, longitude } = currentGeolocation;
		const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
		fetch(url)
			.then(res => res.json())
			.then(data => setWeatherData(data));
	}, [currentGeolocation]);

	return weatherData;
}

export default useWeatherInfo;
