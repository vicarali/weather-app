import { useState, type ReactElement } from "react";
import styles from "./PlaceSearcher.module.css";
import type { City } from "../../types/City";
import { getCities } from "../../api/getCities";
import { useQuery } from "@tanstack/react-query";

type PlaceSearcherProps = {
	className: string;
};

export function PlaceSearcher({ className }: PlaceSearcherProps): ReactElement {
	const [currentPlaceQuery, setCurrentPlaceQuery] = useState("");
	const { data: queriedPlaces, refetch: fetchPlaces } = useQuery<City[]>({
		queryKey: ["places", currentPlaceQuery],
		queryFn: () => getCities(currentPlaceQuery),
		enabled: false
	});

	function handlePlaceSearch(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		fetchPlaces();
	}

	return (
		<search className={`${className} text-preset-5-medium`}>
			<form className={styles.wrapper} onSubmit={(e) => handlePlaceSearch(e)}>
				<div className={styles.inputContainer}>
					<input
						type="text"
						placeholder="Search for a place..."
						className={styles.input}
						value={currentPlaceQuery}
						onChange={(e) => setCurrentPlaceQuery(e.target.value)}
					/>
				</div>
				<button className={styles.button}>Search</button>
			</form>
			{queriedPlaces && <PlaceSearcherResults places={queriedPlaces} />}
		</search>
	);
}

function PlaceSearcherResults({ places }: { places: City[] }): ReactElement {
	return (
		<ul>
			{places.map((place) => (
				<li key={place.id}>{`${place.name}, ${place.country}`}</li>
			))}
		</ul>
	);
}
