import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.Navbar__List}>
                <img
                    src="https://cakes.koidessertbar.com.au/uploads/b/76cc1f40-72fd-11ea-bca1-9909aa416615/logo.png?width=400"
                    className={styles.Navbar__Icon}
                />
                <Link to="/" className={styles.Navbar__Links}>
                    Home
                </Link>
                <Link to="/Products" className={styles.Navbar__Links}>
                    Celebration Cakes
                </Link>
                <Searchbar />
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className={styles.Searchbar__Icon}
                    size="lg"
                />
            </ul>
        </nav>
    );
};

export default Navbar;
