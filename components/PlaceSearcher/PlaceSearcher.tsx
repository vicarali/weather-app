import { useState, type ReactElement } from "react";
import styles from "./PlaceSearcher.module.css";
import type { City } from "../../types/City";
import { getCities } from "../../api/getCities";
import { useQuery } from "@tanstack/react-query";
import { PlaceSearcherResults } from "../PlaceSearcherResults/PlaceSearcherResults";

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
		<search className={`${styles.container} ${className} text-preset-5-medium`}>
			<form
				className={styles.formWrapper}
				onSubmit={(e) => handlePlaceSearch(e)}
			>
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
