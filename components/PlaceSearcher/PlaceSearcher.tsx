import type { ReactElement } from "react";
import styles from "./PlaceSearcher.module.css";

type PlaceSearcherProps = {
	className: string;
};

export function PlaceSearcher({ className }: PlaceSearcherProps): ReactElement {
	return (
		<div className={`${styles.wrapper} ${className} text-preset-5-medium`}>
			<div className={styles.inputContainer}>
				<input
					type="text"
					placeholder="Search for a place..."
					className={styles.input}
				/>
			</div>
			<button className={styles.button}>Search</button>
		</div>
	);
}
