import styles from "./CartItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../Context/CartItemContext";
import { deleteCartItems, updateCartItems } from "../../Services/CartItems";
import Quantity from "../Quantity";
import Variants from "../Variants/Variants";

const CartItem = ({ item }) => {
    const { onAddedToCart, setVariants } = useContext(CartContext);

    // Destructuring item and product object and only retrieving values needed
    const { product, quantity, variant } = item;
    const { imageURL, name, price } = product;

    const handleRemoveCartItem = async () => {
        await deleteCartItems(item.id);
        onAddedToCart();
    };

    const handleDecrement = async () => {
        const updatedItem = { ...item, quantity: quantity - 1 };
        await updateCartItems(updatedItem.id, updatedItem);
        onAddedToCart();
    };

    const handleIncrement = async () => {
        const updatedItem = { ...item, quantity: quantity + 1 };
        await updateCartItems(updatedItem.id, updatedItem);
        onAddedToCart();
    };

    const itemPrice = () => {
        return price * quantity;
    };

    return (
        <div className={styles.CartItem}>
            <div className={styles.CartItem__Main}>
                <img
                    src={imageURL}
                    alt="Koi Cake"
                    className={styles.CartItem__Img}
                />
                <div className={styles.CartItem__Snapshot}>
                    <h3 className={styles.CartItem__Heading}>{name}</h3>
                    <p>
                        <strong>Variants: </strong> {variant}
                    </p>
                    <Quantity
                        quantity={quantity}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        className={styles.CartItem__Quantity}
                    />
                    <Button variant="dark" onClick={handleRemoveCartItem}>
                        Remove
                    </Button>
                </div>
                <div>
                    <p>${itemPrice()}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
