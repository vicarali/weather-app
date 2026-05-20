import type { ReactElement } from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css";
import { UnitsDropdown } from "../UnitsDropdown/UnitsDropdown";

export function Header(): ReactElement {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Weather Now Logo" />
			<UnitsDropdown />
		</header>
	);
}
