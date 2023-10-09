import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function ChartTemp({ information }) {
	if (information === null) return;

	const labels = ['°C', '°C', '°C', '°C', '°C', '°C', '°C'];
	const data = {
		labels,
		datasets: [
			{
				label: '',
				data: information.daily.map(
					(el, index) =>
						index === 0 ? null : Math.trunc(el.temp.day - 273.15),
					// ` ${Math.trunc(el.temp.day - 273.15)}°C`
				),
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				display: false,
			},
			y: {
				display: false,
			},
		},
	};

	return (
		<>
			{console.log(information.daily)}
			<Line data={data} options={options} />
		</>
	);
}

export default ChartTemp;
