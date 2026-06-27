import type { ReactElement } from "react";
import styles from "./PlaceCard.module.css";
import sunnyImg from "../../assets/images/icon-sunny.webp";
import { usePlaceContext } from "../../contexts/PlaceContext";
import { getCurrentDate } from "./getCurrentDate";
import { useQuery } from "@tanstack/react-query";
import { getWeatherByCity } from "../../api/getWeatherByCity";
import { weatherToImgMap } from "./weatherToImgMap";

export function PlaceCard(): ReactElement {
	const { currentPlace } = usePlaceContext();
	const currentDate = getCurrentDate();
	const { data: currentWeather, isSuccess } = useQuery({
		queryKey: ["currentWeather", currentPlace],
		queryFn: () => getWeatherByCity(currentPlace)
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<h2 className="text-preset-4">
					{currentPlace.name}, {currentPlace.country}
				</h2>
				<p className={styles.date}>{currentDate}</p>
			</div>
			<div className={styles.weatherWrapper}>
				<img
					src={weatherToImgMap[currentWeather?.current.weather_code]}
					alt="Sunny"
					className={styles.weatherImg}
					width="120"
					height="120"
				/>
				<p className="text-preset-1">
					{currentWeather?.current.temperature_2m}º
				</p>
			</div>
		</div>
	);
}
