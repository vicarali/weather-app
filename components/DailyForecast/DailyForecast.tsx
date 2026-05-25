import type { ReactElement } from "react";
import styles from "./DailyForecast.module.css";
import weatherImg from "../../assets/images/icon-rain.webp";

export function DailyForecast({ className }: DailyForecastProps): ReactElement {
	return (
		<ol className={`${styles.list} ${className}`}>
			<DailyForecastCard />
			<DailyForecastCard />
			<DailyForecastCard />
			<DailyForecastCard />
			<DailyForecastCard />
			<DailyForecastCard />
			<DailyForecastCard />
		</ol>
	);
}

function DailyForecastCard() {
	return (
		<li className={styles.item}>
			<h3 className={styles.itemTitle}>Tue</h3>
			<img
				src={weatherImg}
				width="60"
				height="60"
				alt="Rainy"
				className={styles.weatherImg}
			/>
			<div className={`${styles.temperatureWrapper} text-preset-7`}>
				<p>20°</p>
				<p>14°</p>
			</div>
		</li>
	);
}

type DailyForecastProps = {
	className: string;
};
