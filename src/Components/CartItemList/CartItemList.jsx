import styles from "./CartItemList.module.scss";
import CartItem from "../CartItem/CartItem";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartItemContext";
import { Link } from "react-router-dom";
import { getCartItems } from "../../Services/CartItems";

const CartItemList = () => {
    // Hook into global context to access cart items
    const { cartItem, onAddedToCart } = useContext(CartContext);
    console.log(cartItem);

    const totalPrice = () => {
        return cartItem.reduce((sum, item) => {
            return (
                sum + item.selectedProduct.quantity * item.selectedProduct.price
            );
        }, 0);
    };

    const getData = async () => {
        const data = await getCartItems();
        onAddedToCart(data);
    };

    //  Retrieve stored cartItems from DB when refreshing the page. Prevents them from disappearing
    useEffect(() => {
        getData();
    }, []);

    //If there is no item added to the cart, a message will display on the page, otherwise items will display when added. Additionally, we are rendering cartitem.
    return (
        <div className={styles.CartItemList}>
            <h3 className={styles.CartItemList__Heading}>Shopping Cart</h3>
            {cartItem.length === 0 && (
                <div className={styles.CartItemList__Error}>
                    <div>No items added to your cart.</div>
                    <div>
                        <Link to="/Products">
                            Return to Celebration Cakes page
                        </Link>
                    </div>
                </div>
            )}
            <div className={styles.CartItemList__Container}>
                {cartItem.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                })}
                <p className={styles.CartItemList__Total}>
                    <strong>Total: </strong> ${totalPrice()}
                </p>
            </div>
        </div>
    );
};

export default CartItemList;
