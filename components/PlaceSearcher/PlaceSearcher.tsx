import { type ReactElement } from "react";
import styles from "./PlaceSearcher.module.css";
import { usePlaceQueryChange } from "./usePlaceQueryChange";

type PlaceSearcherProps = {
	className: string;
};

export function PlaceSearcher({ className }: PlaceSearcherProps): ReactElement {
	const { handlePlaceQueryChange, currentPlace, currentPlaceQuery } =
		usePlaceQueryChange();

	return (
		<search className={`${styles.wrapper} ${className} text-preset-5-medium`}>
			<div className={styles.inputContainer}>
				<input
					type="text"
					placeholder="Search for a place..."
					className={styles.input}
					value={currentPlaceQuery}
					onChange={(e) => handlePlaceQueryChange(e.target.value)}
				/>
			</div>
			<button className={styles.button}>Search</button>
		</search>
	);
}
