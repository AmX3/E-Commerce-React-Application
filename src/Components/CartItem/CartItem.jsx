import styles from "./CartItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../Context/CartItemContext";
import { deleteCartItems, updateCartItems } from "../../Services/CartItems";
import Quantity from "../Quantity";

const CartItem = ({ item }) => {
    const { cartItem, onAddedToCart } = useContext(CartContext);

    // Destructuring item and product object and only retrieving values needed
    const { product, quantity, selectedProduct } = item;
    const { imageURL, name, price, size } = product;

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
        return selectedProduct.price * quantity;
    };

    const totalPrice = () => {
        return cartItem.reduce((sum, item) => {
            return sum + item.quantity * item.selectedProduct.price;
        }, 0);
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
                    <p>{selectedProduct.size}</p>
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
            <p className={styles.CartItemList__Total}>
                <strong>Total: </strong> ${totalPrice()}
            </p>
        </div>
    );
};

export default CartItem;
