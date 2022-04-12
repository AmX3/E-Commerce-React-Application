import { useState, useEffect } from "react";
import Quantity from "../Quantity";
import styles from "./Product.module.scss";

const Product = ({ product, onChange }) => {
    // state variable for quantity => updated value or default value 1
    const [quantity, setQuantity] = useState(product.quantity || 1);

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
