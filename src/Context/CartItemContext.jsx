import { createContext, useState } from "react";
import { getCartItems } from "../Services/CartItems";

// This CartContext shares products that have been added to the cart across its nested components.

export const CartContext = createContext();

const CartItemProvider = ({ children }) => {
    // Tracking each product in cart
    const [cartItem, setCartItem] = useState([]);
    const [variant, setVariants] = useState(undefined);

    //   Retriving cartItems from DB
    const getItems = async () => {
        const items = await getCartItems();
        setCartItem(items);
    };

    // https://dev.to/lauratoddcodes/a-really-simple-intro-to-context-in-react-6g1
    const handleSizeChange = (e) => {
        setVariants(e.target.value);
    };

    const onAddedToCart = () => getItems();

    return (
        <CartContext.Provider
            value={{ cartItem, onAddedToCart, variant, setVariants }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartItemProvider;
