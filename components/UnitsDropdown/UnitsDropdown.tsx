import type { ReactElement } from "react";
import unitsIcon from "../../assets/images/icon-units.svg";
import dropdownIcon from "../../assets/images/icon-dropdown.svg";

export function UnitsDropdown(): ReactElement {
	return (
		<div>
			<button role="combobox" aria-expanded="false">
				<img src={unitsIcon} alt="" /> Units <img src={dropdownIcon} alt="" />
			</button>
			<div id="units-options"></div>
		</div>
	);
}
