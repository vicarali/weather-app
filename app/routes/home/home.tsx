import type { Route } from "./+types/home";
import { PlaceSearcher } from "../../../components/PlaceSearcher/PlaceSearcher";
import styles from "./home.module.css";
import { PlaceCard } from "../../../components/PlaceCard/PlaceCard";
import { PlaceDetails } from "../../../components/PlaceDetails/PlaceDetails";
import { DailyForecast } from "../../../components/DailyForecast/DailyForecast";
import { HourlyForecast } from "../../../components/HourlyForecast/HourlyForecast";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Weather Now" },
		{ name: "description", content: "Welcome to Weather Now!" }
	];
}

export default function Home() {
	return (
		<>
			<h1 className="text-preset-2">How’s the sky looking today?</h1>
			<PlaceSearcher className={styles.placeSearcher} />
			<div className={styles.placeWrapper}>
				<div className={styles.mainWrapper}>
					<section aria-label="Today's weather">
						<PlaceCard />
						<PlaceDetails className={styles.placeDetails} />
					</section>
					<section className={styles.dailyForecastSection}>
						<h2 className="text-preset-5">Daily forecast</h2>
						<DailyForecast className={styles.dailyForecast} />
					</section>
				</div>
				<aside>
					<HourlyForecast />
				</aside>
			</div>
		</>
	);
}
