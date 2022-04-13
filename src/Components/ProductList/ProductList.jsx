import styles from "./ProductList.module.scss";
import Product from "../Product/Product";
import { getProducts, updateProducts } from "./../../Services/Services";
import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const { search } = useContext(SearchContext);
    // filter products by search term
    const filteredProducts = products.filter((product) => {
        return product.name.includes(search);
    });

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

    // If product id is not the same as selected cake, we will return the product or make it a favourite. We are destructuring the product object and adding in a new key equal to true or false returned by the icon
    const toggleFav = (selectedCake) => {
        setProducts(
            products.map((product) => {
                return product.id !== selectedCake.id
                    ? product
                    : { ...product, isFav: !product.isFav };
            })
        );
    };

    // Get data on app mount
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.ProductList}>
            <h4 className={styles.ProductList__Heading}>
                <strong>Currently displayed: </strong>
                {filteredProducts.length} Cakes
            </h4>
            <div className={styles.ProductList__Grid}>
                {filteredProducts.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            product={product}
                            onChange={handleChange}
                            toggleFav={toggleFav}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
