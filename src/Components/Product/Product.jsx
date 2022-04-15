import { useState, useEffect } from "react";
import Quantity from "../Quantity";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ product, onChange, toggleFav }) => {
    // state variable for quantity => updated value or default value 0
    const [quantity, setQuantity] = useState(product.quantity || 0);

    // FAVOURITE CAKE/S - adding style and alternating icon
    const FavCake = product.isFav ? faHeart : faCakeCandles;
    const favStyle = product.isFav ? styles.FavCake_On : styles.FavCake_Off;

    const handleFav = () => {
        toggleFav(product);
    };

    useEffect(() => {
        onChange({ ...product, quantity: quantity });
    }, [quantity]);

    // Bootstrap Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.Product}>
            <img
                alt="Koi Cake"
                src={product.imageURL}
                className={styles.Product__Img}
                onClick={handleShow}
            />

            <div className={styles.Product__Icon}>
                <h2 className={styles.Product__Name}>{product.name}</h2>
                <FontAwesomeIcon
                    className={favStyle}
                    icon={FavCake}
                    onClick={handleFav}
                    size="2x"
                />
            </div>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        alt="Koi Cake"
                        src={product.imageURL}
                        className={styles.Modal__Img}
                    />

                    <div className={styles.Product__Info}>
                        <p>
                            <strong>Price: </strong>
                            {product.price}
                        </p>
                        <p>
                            <strong>Ingredients: </strong>
                            {product.ingredients}
                        </p>
                        <p>
                            <strong>Description: </strong>
                            {product.description}
                        </p>
                        <Quantity value={quantity} onChange={setQuantity} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Product;
