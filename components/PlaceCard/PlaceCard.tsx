import type { ReactElement } from "react";
import styles from "./PlaceCard.module.css";
import sunnyImg from "../../assets/images/icon-sunny.webp";

export function PlaceCard(): ReactElement {
	return (
		<div className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<h2 className="text-preset-4">Berlin, Germany</h2>
				<p className={styles.date}>Tuesday, Aug 5, 2025</p>
			</div>
			<div className={styles.weatherWrapper}>
				<img
					src={sunnyImg}
					alt="Sunny"
					className={styles.weatherImg}
					width="120"
					height="120"
				/>
				<p className="text-preset-1">68°</p>
			</div>
		</div>
	);
}
