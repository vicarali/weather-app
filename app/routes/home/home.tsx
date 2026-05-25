import type { Route } from "./+types/home";
import { PlaceSearcher } from "../../../components/PlaceSearcher/PlaceSearcher";
import styles from "./home.module.css";
import { PlaceCard } from "../../../components/PlaceCard/PlaceCard";
import { PlaceDetails } from "../../../components/PlaceDetails/PlaceDetails";

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
			<section aria-label="Today's weather">
				<PlaceCard className={styles.placeCard} />
				<PlaceDetails className={styles.placeDetails} />
			</section>
		</>
	);
}
