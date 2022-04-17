import { useState, useContext, useEffect } from "react";
import Quantity from "../Quantity";
import styles from "./Product.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartItemContext";
import { addCartItems, updateCartItems } from "../../Services/CartItems";
import Variants from "../Variants/Variants";

const Product = ({ product, toggleFav }) => {
    // Creating a state variable to track quantity changes

    const { onAddedToCart } = useContext(CartContext);
    const { name, imageURL, price, ingredients, description, size } = product;

    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState(price[0]);
    const [sizeState, setSizeState] = useState(size[0]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // FAVOURITE CAKE/S - adding style and alternating icons
    const FavCake = product.isFav ? faHeart : faCakeCandles;
    const favStyle = product.isFav ? styles.FavCake_On : styles.FavCake_Off;

    const handleFav = () => {
        toggleFav(product);
    };

    useEffect(() => {
        setSelectedProduct({
            ...product,
            size: size[0],
            price: price[0],
            quantity: quantity,
        });
    }, [product]);

    // Adding to Cart. If quantity is 0, do nothing else add selected product to cart. Added product is also added to global cartItem data. Once quantity is selected and button is clicked, modal should close.
    const handleAddToCart = async (quantity) => {
        if (quantity <= 0) {
            return;
        } else {
            await addCartItems({ product, quantity, selectedProduct });
            onAddedToCart();
            handleClose();
        }
    };

    // Watches for any changes in the sizeState and updates according to the switch statement
    useEffect(() => {
        if (selectedProduct) {
            switch (sizeState) {
                case size[0]:
                    setAmount(price[0]);
                    setSelectedProduct({
                        ...product,
                        size: sizeState,
                        quantity: quantity,
                        price: price[0],
                    });
                    break;
                case size[1]:
                    setAmount(price[1]);
                    setSelectedProduct({
                        ...product,
                        size: sizeState,
                        quantity: quantity,
                        price: price[1],
                    });
                    break;
                case size[2]:
                    setAmount(price[2]);
                    setSelectedProduct({
                        ...product,
                        size: sizeState,
                        quantity: quantity,
                        price: price[2],
                    });
                    break;
                case size[3]:
                    setAmount(price[3]);
                    setSelectedProduct({
                        ...product,
                        size: sizeState,
                        quantity: quantity,
                        price: price[3],
                    });
            }
        }
    }, [sizeState, amount]);

    // Changes value of price according to size changes
    const handleSizeChange = (e) => {
        setSizeState(e.target.value);
    };

    // Bootstrap Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.Product}>
            <img
                alt="Koi Cake"
                src={imageURL}
                className={styles.Product__Img}
                onClick={handleShow}
            />

            <div className={styles.Product__Icon}>
                <h2 className={styles.Product__Name}>{name}</h2>
                <FontAwesomeIcon
                    className={favStyle}
                    icon={FavCake}
                    onClick={handleFav}
                    size="2x"
                />
            </div>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        alt="Koi Cake"
                        src={imageURL}
                        className={styles.Modal__Img}
                    />
                    <div className={styles.Product__Info}>
                        <p>
                            <strong>Price: </strong>${amount}
                        </p>
                        <div>
                            <Variants
                                size={size}
                                handleSizeChange={handleSizeChange}
                            />
                        </div>
                        <p>
                            <strong>Ingredients: </strong>
                            {ingredients}
                        </p>
                        <p>
                            <strong>Description: </strong>
                            {description}
                        </p>
                        <Quantity
                            quantity={quantity}
                            onDecrement={() => setQuantity(quantity - 1)}
                            onIncrement={() => setQuantity(quantity + 1)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="dark"
                        onClick={() =>
                            handleAddToCart(quantity, selectedProduct)
                        }>
                        Add to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Product;
