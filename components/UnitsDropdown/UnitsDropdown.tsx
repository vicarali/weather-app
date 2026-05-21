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
		<div>
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
				<button>Switch to Imperial</button>
				<h2 id="temperature-title">Temperature</h2>
				<ul role="group" aria-labelledby="temperature-title">
					<li role="option" aria-selected="true">
						Celsius (°C)
					</li>
					<li role="option" aria-selected="false">
						Fahrenheit (°F)
					</li>
				</ul>
				<h2 id="wind-speed-title">Wind Speed</h2>
				<ul role="group" aria-labelledby="wind-speed-title">
					<li role="option" aria-selected="true">
						km/h
					</li>
					<li role="option" aria-selected="false">
						mph
					</li>
				</ul>
				<h2 id="precipitation-title">Precipitation</h2>
				<ul role="group" aria-labelledby="precipitation-title">
					<li role="option" aria-selected="true">
						Millimeters (mm)
					</li>
					<li role="option" aria-selected="false">
						Inches (in)
					</li>
				</ul>
			</div>
		</div>
	);
}
