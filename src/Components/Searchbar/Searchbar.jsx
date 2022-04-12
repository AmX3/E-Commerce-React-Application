import React from "react";
import styles from "./Searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
    return (
        <div className={styles.Searchbar__Container}>
            <input
                className={styles.Searchbar__Input}
                id="searchInput"
                type="text"
                placeholder="Search for a product"></input>
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.Searchbar__Icon}
                size="lg"
            />
        </div>
    );
};

export default Searchbar;
