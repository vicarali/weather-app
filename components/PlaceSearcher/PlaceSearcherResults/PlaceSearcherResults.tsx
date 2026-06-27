import type { ReactElement } from "react";
import type { City } from "../../../types/City";
import styles from "./PlaceSearcherResults.module.css";
import { usePlaceContext } from "../../../contexts/PlaceContext";
import { usePlaceSearch } from "../usePlaceSearch";

export function PlaceSearcherResults({
	places,
	onSearchResultClick: hideSearchResults
}: {
	places: City[];
	onSearchResultClick: () => void;
}): ReactElement {
	const { setCurrentPlace } = usePlaceContext();

	function handleSetPlace(place: City): void {
		setCurrentPlace(place);
		hideSearchResults();
	}

	return (
		<ul className={styles.wrapper}>
			{places.map((place) => (
				<li
					className={styles.item}
					key={place.id}
					tabIndex={0}
					onClick={() => handleSetPlace(place)}
				>{`${place.name}, ${place.country}`}</li>
			))}
		</ul>
	);
}
