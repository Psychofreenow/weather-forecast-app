import { useState, useEffect } from 'react';

function useDate() {
	const [currentFullDate, setCurrentFullDate] = useState(null);
	const date = new Date();

	useEffect(() => {
		const newInterval = setInterval(() => {
			const newFullDate = date.toString();
			setCurrentFullDate(newFullDate);
		}, 1000);

		return () => clearInterval(newInterval);
	}, [currentFullDate]);

	return { currentFullDate };
}

export default useDate;
