import type { ReactElement } from "react";
import type { City } from "../../types/City";
import styles from "./PlaceSearcherResults.module.css";

export function PlaceSearcherResults({
	places
}: {
	places: City[];
}): ReactElement {
	return (
		<ul className={styles.wrapper}>
			{places.map((place) => (
				<li
					className={styles.item}
					key={place.id}
					tabIndex={0}
				>{`${place.name}, ${place.country}`}</li>
			))}
		</ul>
	);
}
