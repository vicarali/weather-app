import type { Route } from "./+types/home";
import { Header } from "../../components/Header/Header";

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
		</>
	);
}
