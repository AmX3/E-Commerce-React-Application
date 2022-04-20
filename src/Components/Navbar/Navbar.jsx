import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartItemContext";
import { getCartItems } from "../../Services/CartItems";

const Navbar = () => {
    // Hooking into the CartContext, and accessing cartItem. Displaying how many items are added to the cart.
    const { cartItem, onAddedToCart } = useContext(CartContext);

    const getData = async () => {
        const data = await getCartItems();
        onAddedToCart(data);
    };

    //  Retrieve stored cartItems from DB when refreshing the page. Prevents them from disappearing and amount of items is displayed next to cart icon.
    useEffect(() => {
        getData();
    }, []);

    return (
        <nav className={styles.Navbar}>
            <ul className={styles.Navbar__List}>
                <img
                    src="https://cakes.koidessertbar.com.au/uploads/b/76cc1f40-72fd-11ea-bca1-9909aa416615/logo.png?width=400"
                    className={styles.Navbar__Logo}
                    alt="Koi Logo"
                />
                <Link to="/" className={styles.Navbar__Links}>
                    Home
                </Link>
                <Link to="/Products" className={styles.Navbar__Links}>
                    Celebration Cakes
                </Link>
                <Searchbar />
                <Link to="/CartPage" className={styles.Navbar__Cart}>
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className={styles.Navbar__CartIcon}
                        size="lg"
                    />
                    <p className={styles.Navbar__Count}>{cartItem.length}</p>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
