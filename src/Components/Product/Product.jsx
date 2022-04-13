import { useState, useEffect } from "react";
import Quantity from "../Quantity";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

    return (
        <div className={styles.Product}>
            <img
                alt="Koi Cake"
                src={product.imageURL}
                className={styles.Product__Img}
            />
            <div className={styles.Icon}>
                <FontAwesomeIcon
                    className={favStyle}
                    icon={FavCake}
                    onClick={handleFav}
                    size="lg"
                />
            </div>

            <h2 className={styles.Product__Name}>{product.name}</h2>
            <div className={styles.Product__Info}>
                <p>
                    <strong>Price: </strong>
                    {product.price}
                </p>
                <Quantity value={quantity} onChange={setQuantity} />
                <p>
                    <strong>Description: </strong>
                    {product.description}
                </p>
                <p>
                    <strong>Ingredients: </strong>
                    {product.ingredients}
                </p>
            </div>
        </div>
    );
};

export default Product;
