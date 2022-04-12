import styles from "./SavedProduct.module.scss";
import Navbar from "../../Components/Navbar";
import ProductList from "../../Components/ProductList/ProductList";

const SavedProducts = () => {
    return (
        <div>
            <Navbar />
            <ProductList />
        </div>
    );
};

export default SavedProducts;
