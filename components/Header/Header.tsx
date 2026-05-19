import type { ReactElement } from "react";
import logo from "../../assets/images/logo.svg";

export function Header(): ReactElement {
	return (
		<header>
			<img src={logo} alt="Weather Now Logo" />
			<select>
				<optgroup label="TEST">
					<option>Hello</option>
				</optgroup>
			</select>
		</header>
	);
}
