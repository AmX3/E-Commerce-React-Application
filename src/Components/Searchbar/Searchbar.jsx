import React from "react";
import styles from "./Searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";

const Searchbar = () => {
    const [input, setInput] = useState("");

    // Hooking into SearchContext and accessing both the variable and function
    const { search, setSearch } = useContext(SearchContext);

    // Tracking changes made in the searchbar as user types
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleClick = () => {
        // When clicking, the searchterm is set to the current input
        setSearch(input);
        // Reset input to an empty string
        setInput("");
    };
    console.log(search);

    return (
        <div className={styles.Searchbar__Container}>
            <input
                className={styles.Searchbar__Input}
                id="searchInput"
                type="text"
                placeholder="Search for a product"
                onChange={handleChange}
                value={input}></input>
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.Searchbar__Icon}
                size="lg"
                onClick={handleClick}
            />
        </div>
    );
};

export default Searchbar;
