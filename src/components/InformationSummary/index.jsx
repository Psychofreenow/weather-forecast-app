import useDate from '../../hooks/useDate';
import styles from './styles.module.css';
import Cloud from '../Icons/Cloud';
import { useWetherFullInformation } from '../../context/weatherContext';

function InformationSummary() {
	const { currentFullDate } = useDate();
	const information = useWetherFullInformation();

	return (
		<>
			{information === null ? (
				'cargando...'
			) : (
				<section className={styles.container}>
					<header className={styles.header}>
						<p className={styles.timezone}>
							Your City: <span>{information.timezone}</span>
						</p>
					</header>
					<div className={styles.principalInfoContainer}>
						<p className={styles.date}>{currentFullDate}</p>
						<div className={styles.tempInfoContainer}>
							<Cloud />
							<p className={styles.temp}>
								<span>
									{` ${Math.trunc(information.current.temp - 273.15)}°C`}
								</span>
							</p>
						</div>
						<p className={styles.weather}>
							{information.current.weather[0].main}
						</p>
					</div>
					<div className={styles.secondaryInfoContainer}>
						<p className={styles.humidity}>
							Humedad:
							<span>{` ${Math.trunc(information.current.humidity)}%`}</span>
						</p>
						<p className={styles.windSpeed}>
							Velocidad de vientos:
							<span>{` ${Math.trunc(information.current.wind_speed)} km`}</span>
						</p>
					</div>
				</section>
			)}
		</>
	);
}

export default InformationSummary;
