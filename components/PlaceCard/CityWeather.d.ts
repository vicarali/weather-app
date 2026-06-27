import type { weatherToImgMap } from "../components/PlaceCard/weatherToImgMap";

export type CityWeather = {
	current: {
		apparent_temperature: number;
		precipitation: number;
		relative_humidy_2m: number;
		temperature_2m: number;
		weather_code: keyof typeof weatherToImgMaps;
	};
};
