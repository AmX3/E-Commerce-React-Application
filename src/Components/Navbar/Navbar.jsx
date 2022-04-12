import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.Navbar__List}>
                <Link to="/" className={styles.Navbar__Links}>
                    Home
                </Link>
                <Link to="/Products" className={styles.Navbar__Links}>
                    Products
                </Link>
                <Link to="/SavedProducts" className={styles.Navbar__Links}>
                    Saved Products
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
