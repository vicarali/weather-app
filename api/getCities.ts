import type { City } from "../types/City";

const GEOCODING_API_ENDPOINT =
	"https://geocoding-api.open-meteo.com/v1/search?language=en&format=json&count=4";

export async function getCities(cityQuery: string): Promise<City[]> {
	const formattedEndpoint = `${GEOCODING_API_ENDPOINT}&name=${cityQuery}`;

	try {
		const response = await fetch(formattedEndpoint);
		const result = await response.json();
		return result.results;
	} catch (error) {
		throw error;
	}
}
