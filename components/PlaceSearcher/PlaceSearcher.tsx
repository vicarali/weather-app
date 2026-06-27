import { type ReactElement } from "react";
import styles from "./PlaceSearcher.module.css";
import { PlaceSearcherResults } from "./PlaceSearcherResults/PlaceSearcherResults";
import { usePlaceSearch } from "./usePlaceSearch";

type PlaceSearcherProps = {
	className: string;
};

export function PlaceSearcher({ className }: PlaceSearcherProps): ReactElement {
	const {
		currentPlaceQuery,
		setCurrentPlaceQuery,
		queriedPlaces,
		searchPlaces,
		showSearchResults,
		hideSearchResults
	} = usePlaceSearch();
	const shouldShowSearchResults = showSearchResults && queriedPlaces;

	function handlePlaceSearch(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		searchPlaces();
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
			{shouldShowSearchResults && (
				<PlaceSearcherResults
					places={queriedPlaces!}
					onSearchResultClick={hideSearchResults}
				/>
			)}
		</search>
	);
}
