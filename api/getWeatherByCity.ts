import type { CityWeather } from "../components/PlaceCard/cityWeather";
import type { City } from "../types/City";

const WEATHER_API_ENDPOINT =
	"https://api.open-meteo.com/v1/forecast?current=temperature_2m,weather_code,wind_speed_10m,precipitation,relative_humidity_2m,apparent_temperature";

export async function getWeatherByCity(city: City): Promise<CityWeather> {
	const formattedEndpoint = `${WEATHER_API_ENDPOINT}&latitude=${city.latitude}&longitude=${city.longitude}`;

	try {
		const response = await fetch(formattedEndpoint);
		return await response.json();
	} catch (error) {
		throw error;
	}
}
