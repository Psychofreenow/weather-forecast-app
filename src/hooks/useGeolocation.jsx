import { useEffect, useState } from 'react';

function useGeolocation() {
	const [currentGeolocation, setCurrentGeolocation] = useState(null);

	useEffect(() => {
		function success(pos) {
			const crd = pos.coords;
			setCurrentGeolocation(crd);
		}

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		const options = {
			enableHighAccuracy: false,
			timeout: 5000,
			maximumAge: 0,
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
	}, []);

	return currentGeolocation;
}

export default useGeolocation;
