import {
	createContext,
	useContext,
	useState,
	type ReactElement,
	type ReactNode
} from "react";

const DEFAULT_PLACE = "viladecans";
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
	const [currentPlace, setCurrentPlace] = useState<string>(DEFAULT_PLACE);

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
	currentPlace: string;
	setCurrentPlace: React.Dispatch<React.SetStateAction<string>>;
}
