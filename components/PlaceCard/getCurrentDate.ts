export function getCurrentDate(): string {
	const currentDate = new Date();

	return currentDate.toDateString();
}
