import { useState, type ReactElement } from "react";
import styles from "./HourlyForecast.module.css";
import dropdownIcon from "../../assets/images/icon-dropdown.svg";
import weatherImg from "../../assets/images/icon-rain.webp";

export function HourlyForecast(): ReactElement {
	const [dayDropdownOpen, setDayDropdownOpen] = useState(false);

	function handleDropdownToggle() {
		setDayDropdownOpen((current) => !current);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.headingWrapper}>
				<h2 className="text-preset-5">Hourly forecast</h2>
				<div className={styles.dropdownWrapper}>
					<button
						className={`${styles.dropdownToggle} text-preset-7`}
						id="day-dropdown-toggle"
						aria-expanded={dayDropdownOpen}
						aria-haspopup="listbox"
						aria-controls="day-dropdown"
						onClick={handleDropdownToggle}
					>
						Tuesday
						<img src={dropdownIcon} alt="" width="12" height="18" />
					</button>
					<ol id="day-dropdown" role="listbox" className={styles.dropdown}>
						<li role="option" className={styles.dropdownOption}>
							Monday
						</li>
						<li role="option" className={styles.dropdownOption}>
							Tuesday
						</li>
						<li role="option" className={styles.dropdownOption}>
							Wednesday
						</li>
						<li role="option" className={styles.dropdownOption}>
							Thursday
						</li>
						<li role="option" className={styles.dropdownOption}>
							Friday
						</li>
						<li role="option" className={styles.dropdownOption}>
							Saturday
						</li>
						<li role="option" className={styles.dropdownOption}>
							Sunday
						</li>
					</ol>
				</div>
			</div>
			<ol className={styles.list}>
				<HourlyForecastItem />
				<HourlyForecastItem />
				<HourlyForecastItem />
				<HourlyForecastItem />
				<HourlyForecastItem />
				<HourlyForecastItem />
				<HourlyForecastItem />
				<HourlyForecastItem />
			</ol>
		</div>
	);
}

function HourlyForecastItem(): ReactElement {
	return (
		<li className={styles.listItem}>
			<img src={weatherImg} width="40" height="40" alt="Rainy" />
			<p className={`${styles.hour} text-preset-5-medium`}>3 PM</p>
			<p className={`${styles.temperature} text-preset-7`}>20°</p>
		</li>
	);
}
