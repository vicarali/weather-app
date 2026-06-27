import {
	createContext,
	useContext,
	useState,
	type ReactElement,
	type ReactNode
} from "react";
import type { City } from "../types/City";

const DEFAULT_PLACE: City = {
	name: "Viladecans",
	country: "Spain",
	latitude: 41.31405,
	longitude: 2.01427,
	id: 3105935
};
const DEFAULT_VALUE = {
	currentPlace: DEFAULT_PLACE,
	setCurrentPlace: () => {}
};

const PlaceContext = createContext<PlaceContextValue>(DEFAULT_VALUE);

export function PlaceContextProvider({
	children
}: {
	children: ReactNode;
}): ReactElement {
	const [currentPlace, setCurrentPlace] = useState<City>(DEFAULT_PLACE);

	return (
		<PlaceContext value={{ currentPlace, setCurrentPlace }}>
			{children}
		</PlaceContext>
	);
}

export function usePlaceContext(): PlaceContextValue {
	return useContext(PlaceContext);
}

interface PlaceContextValue {
	currentPlace: City;
	setCurrentPlace: React.Dispatch<React.SetStateAction<City>>;
}
