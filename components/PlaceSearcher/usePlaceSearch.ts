import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCities } from "../../api/getCities";
import type { City } from "../../types/City";

export function usePlaceSearch() {
	const [currentPlaceQuery, setCurrentPlaceQuery] = useState<string>("");
	const { data: queriedPlaces, refetch } = useQuery<City[]>({
		queryKey: ["places", currentPlaceQuery],
		queryFn: () => getCities(currentPlaceQuery),
		enabled: false
	});
	const [showSearchResults, setShowSearchResults] = useState<boolean>(false);

	function searchPlaces(): void {
		refetch();
		setShowSearchResults(true);
	}

	function hideSearchResults(): void {
		setShowSearchResults(false);
		setCurrentPlaceQuery("");
	}

	return {
		currentPlaceQuery,
		setCurrentPlaceQuery,
		queriedPlaces,
		searchPlaces,
		showSearchResults,
		hideSearchResults
	};
}
