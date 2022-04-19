import styles from "./ProductInfo.module.scss";
import { getProductId } from "../../Services/Services";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Quantity from "../Quantity";
import Variants from "../Variants/Variants";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { addCartItems } from "../../Services/CartItems";
import { CartContext } from "../../Context/CartItemContext";

// https://www.youtube.com/watch?v=t7VmF4WsLCo

const ProductInfo = () => {
    const { id } = useParams();

    const [productId, setProductId] = useState({});
    const { onAddedToCart } = useContext(CartContext);

    const getData = async () => {
        const products = await getProductId(id);
        setProductId(products);
    };

    useEffect(() => {
        getData();
    }, []);

    const { name, imageURL, price, ingredients, description, size, quantity } =
        productId;

    console.log(productId);

    // // Tracking state variables
    // const [quantityState, setQuantityState] = useState(quantity);
    // const [amount, setAmount] = useState(price[0]);
    // const [sizeState, setSizeState] = useState(size[0]);
    // const [selectedProduct, setSelectedProduct] = useState({});

    // // On app mount, creating a new object called setSelectedProduct and destructuring the product object to create a new object containing size, price and quantity
    // useEffect(() => {
    //     setSelectedProduct({
    //         ...productId,
    //         size: size[0],
    //         price: price[0],
    //         quantity: quantityState,
    //     });
    // }, [productId]);

    // // Changes value of price according to size changes
    // const handleSizeChange = (e) => {
    //     setSizeState(e.target.value);
    // };

    // // Adding to Cart. If quantity is 0, do nothing else add selected product to cart. Added product is also added to global cartItem data. Once quantity is selected and button is clicked, modal should close.
    // const handleAddToCart = async (quantityState) => {
    //     if (quantityState <= 0) {
    //         return;
    //     } else {
    //         await addCartItems({ selectedProduct });
    //         onAddedToCart();
    //     }
    // };

    // // Watches for any changes in the sizeState and updates according to the switch statement
    // useEffect(() => {
    //     if (selectedProduct) {
    //         switch (sizeState) {
    //             case size[0]:
    //                 setAmount(price[0]);
    //                 setSelectedProduct({
    //                     ...productId,
    //                     size: sizeState,
    //                     quantity: quantityState,
    //                     price: price[0],
    //                 });
    //                 break;
    //             case size[1]:
    //                 setAmount(price[1]);
    //                 setSelectedProduct({
    //                     ...productId,
    //                     size: sizeState,
    //                     quantity: quantityState,
    //                     price: price[1],
    //                 });
    //                 break;
    //             case size[2]:
    //                 setAmount(price[2]);
    //                 setSelectedProduct({
    //                     ...productId,
    //                     size: sizeState,
    //                     quantity: quantityState,
    //                     price: price[2],
    //                 });
    //                 break;
    //             case size[3]:
    //                 setAmount(price[3]);
    //                 setSelectedProduct({
    //                     ...productId,
    //                     size: sizeState,
    //                     quantity: quantityState,
    //                     price: price[3],
    //                 });
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    // }, [sizeState, quantityState, productId]);

    return (
        <div>
            <img alt="Koi Cake" src={imageURL} />
            <h2>{name}</h2>
            <p>{ingredients}</p>
            <p>{description}</p>
            {/* <p>{amount}</p> */}
            {/* <Variants size={size} handleSizeChange={handleSizeChange} />
            <Quantity
                quantity={quantityState}
                onDecrement={() => setQuantityState(quantityState - 1)}
                onIncrement={() => setQuantityState(quantityState + 1)}
            />
            <Button
                variant="dark"
                onClick={() => handleAddToCart(selectedProduct)}>
                Add to Cart
            </Button> */}
        </div>
    );
};

export default ProductInfo;
