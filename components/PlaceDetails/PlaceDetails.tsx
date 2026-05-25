import type { ReactElement } from "react";
import styles from "./PlaceDetails.module.css";

type PlaceDetailsProps = {
	className: string;
};

export function PlaceDetails({ className }: PlaceDetailsProps): ReactElement {
	return (
		<dl className={`${styles.list} ${className}`}>
			<div className={styles.item}>
				<dt>Feels Like</dt>
				<dd className={`text-preset-3 ${styles.itemValue}`}>18°</dd>
			</div>
			<div className={styles.item}>
				<dt>Feels Like</dt>
				<dd className={`text-preset-3 ${styles.itemValue}`}>18°</dd>
			</div>
			<div className={styles.item}>
				<dt>Feels Like</dt>
				<dd className={`text-preset-3 ${styles.itemValue}`}>18°</dd>
			</div>
			<div className={styles.item}>
				<dt>Feels Like</dt>
				<dd className={`text-preset-3 ${styles.itemValue}`}>18°</dd>
			</div>
		</dl>
	);
}
