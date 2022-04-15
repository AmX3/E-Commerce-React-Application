import styles from "./ProductPage.module.scss";
import Navbar from "../../Components/Navbar";
import ProductList from "../../Components/ProductList/ProductList";
import Footer from "../../Components/Footer";

const ProductPage = () => {
    return (
        <div className={styles.ProductList}>
            <Navbar />
            <ProductList />
            <Footer />
        </div>
    );
};

export default ProductPage;
