import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./Containers/Home";
import ProductPage from "./Containers/ProductPage";
import CartPage from "./Containers/CartPage";
import SearchProvider from "./Context/SearchContext";
import CartItemProvider from "./Context/CartItemContext";

const App = () => {
    return (
        <div className={styles.App}>
            <BrowserRouter basename="/E-Commerce-React-Application">
                <CartItemProvider>
                    <SearchProvider>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route
                                path="/Products"
                                element={<ProductPage />}></Route>
                            <Route
                                path="/CartPage"
                                element={<CartPage />}></Route>
                        </Routes>
                    </SearchProvider>
                </CartItemProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
