import { createContext, useState } from "react";
import { getCartItems } from "../Services/CartItems";

// This CartContext shares products that have been added to the cart across its nested components.

export const CartContext = createContext();

const CartItemProvider = ({ children }) => {
    // Tracking each product in cart
    const [cartItem, setCartItem] = useState([]);

    //   Retriving cartItems from DB
    const getItems = async () => {
        const items = await getCartItems();
        setCartItem(items);
    };

    const onAddedToCart = () => getItems();

    return (
        <CartContext.Provider value={{ cartItem, onAddedToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartItemProvider;
