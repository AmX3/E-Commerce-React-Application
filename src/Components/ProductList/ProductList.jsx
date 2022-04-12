import styles from "./ProductList.module.scss";
import Product from "../Product/Product";
import { getProducts, updateProducts } from "./../../Services/Services";
import React, { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    // Updating data and sending it to server. After every update, the webpage will update with new information
    const handleChange = async (updatedQuantity) => {
        const { id, ...record } = updatedQuantity;
        await updateProducts(id, record);
        getData();
    };

    // Get data on app mount
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.ProductList}>
            <h4 className={styles.ProductList__Heading}>
                <strong>Currently displayed: </strong>
                {products.length} Cakes
            </h4>
            <div className={styles.ProductList__Grid}>
                {products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            product={product}
                            onChange={handleChange}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
