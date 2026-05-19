import type { Route } from "./+types/home";
import { Header } from "../../components/Header/Header";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Weather Now" },
		{ name: "description", content: "Welcome to Weather Now!" }
	];
}

export default function Home() {
	return <Header />;
}
