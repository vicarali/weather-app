import { useState, type ReactElement } from "react";
import unitsIcon from "../../assets/images/icon-units.svg";
import dropdownIcon from "../../assets/images/icon-dropdown.svg";
import styles from "./UnitsDropdown.module.css";

export function UnitsDropdown(): ReactElement {
	const [unitsOptionsDropdownOpen, setUnitsOptionsDropdownOpen] =
		useState(false);

	function handleDropdownToggle() {
		setUnitsOptionsDropdownOpen((current) => !current);
	}

	return (
		<div className={`${styles.wrapper} text-preset-7`}>
			<button
				id="units-options-dropdown-toggle"
				aria-expanded={unitsOptionsDropdownOpen}
				aria-haspopup="listbox"
				aria-controls="units-options-dropdown"
				className={styles.unitsOptionsDropdownToggle}
				onClick={handleDropdownToggle}
			>
				<img src={unitsIcon} alt="" /> Units <img src={dropdownIcon} alt="" />
			</button>
			<div
				id="units-options-dropdown"
				role="listbox"
				aria-labelledby="units-options-dropdown-toggle"
				className={styles.unitsOptionsDropdown}
			>
				<button className={styles.unitTypeToggle}>Switch to Imperial</button>
				<h2
					id="temperature-title"
					className={`${styles.unitGroupTitle} text-preset-8`}
				>
					Temperature
				</h2>
				<ul
					role="group"
					aria-labelledby="temperature-title"
					className={styles.unitGroup}
				>
					<li role="option" aria-selected="true" className={styles.unitOption}>
						Celsius (°C)
					</li>
					<li role="option" aria-selected="false" className={styles.unitOption}>
						Fahrenheit (°F)
					</li>
				</ul>
				<h2
					id="wind-speed-title"
					className={`${styles.unitGroupTitle} text-preset-8`}
				>
					Wind Speed
				</h2>
				<ul
					role="group"
					aria-labelledby="wind-speed-title"
					className={styles.unitGroup}
				>
					<li role="option" aria-selected="true" className={styles.unitOption}>
						km/h
					</li>
					<li role="option" aria-selected="false" className={styles.unitOption}>
						mph
					</li>
				</ul>
				<h2
					id="precipitation-title"
					className={`${styles.unitGroupTitle} text-preset-8`}
				>
					Precipitation
				</h2>
				<ul
					role="group"
					aria-labelledby="precipitation-title"
					className={styles.unitGroup}
				>
					<li role="option" aria-selected="true" className={styles.unitOption}>
						Millimeters (mm)
					</li>
					<li role="option" aria-selected="false" className={styles.unitOption}>
						Inches (in)
					</li>
				</ul>
			</div>
		</div>
	);
}
