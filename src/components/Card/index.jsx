import Cloud from '../Icons/Cloud';
import styles from './styles.module.css';

function Card({ elements }) {
	const { humidity } = elements;
	const weather = elements.weather[0].main;

	return (
		<figure className={styles.container}>
			<strong>{weather}</strong>
			<Cloud />
			<figcaption>{` ${Math.trunc(-273.15)}°C`}</figcaption>
		</figure>
	);
}

export default Card;
