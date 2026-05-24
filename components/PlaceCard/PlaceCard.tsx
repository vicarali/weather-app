import type { ReactElement } from "react";
import styles from "./PlaceCard.module.css";
import sunnyImg from "../../assets/images/icon-sunny.webp";

type PlaceCardProps = {
	className: string;
};

export function PlaceCard({ className }: PlaceCardProps): ReactElement {
	return (
		<div className={`${styles.wrapper} ${className}`}>
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
