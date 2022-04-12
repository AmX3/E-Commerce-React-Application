import styles from "./ProductPage.module.scss";
import Navbar from "../../Components/Navbar";
import ProductList from "../../Components/ProductList/ProductList";

const ProductPage = () => {
    return (
        <div className={styles.ProductList}>
            <Navbar />
            <ProductList />
        </div>
    );
};

export default ProductPage;
