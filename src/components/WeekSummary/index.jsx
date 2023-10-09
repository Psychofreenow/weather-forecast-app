import { useWetherFullInformation } from '../../context/weatherContext';
import Card from '../Card';
import ChartTemp from '../ChartTemp';
import styles from './styles.module.css';

function WeekSummary() {
	const information = useWetherFullInformation();

	return (
		<section className={styles.container}>
			<ChartTemp information={information} />
			<div className={styles.weatherContainer}>
				{information === null
					? 'cargando...'
					: information.daily.map((el, index) =>
							index === 0 ? null : <Card key={index} elements={el} />,
					  )}
			</div>
		</section>
	);
}

export default WeekSummary;
