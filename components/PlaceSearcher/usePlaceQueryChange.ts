import { useState } from "react";
import { usePlaceContext } from "../../contexts/PlaceContext";

export function usePlaceQueryChange() {
	const [currentPlaceQuery, setCurrentPlaceQuery] = useState("");
	const { currentPlace, setCurrentPlace } = usePlaceContext();

	function handlePlaceQueryChange(placeQuery: string) {
		setCurrentPlaceQuery(placeQuery);
		setCurrentPlace(placeQuery);
	}

	return { currentPlaceQuery, currentPlace, handlePlaceQueryChange };
}
