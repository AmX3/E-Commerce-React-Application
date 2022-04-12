import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./Containers/Home";
import ProductPage from "./Containers/ProductPage";
import SavedProducts from "./Containers/SavedProducts";

const App = () => {
    return (
        <div>
            <div className={styles.App}>
                <BrowserRouter basename="/E-Commerce-React-Application">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/Products"
                            element={<ProductPage />}></Route>
                        {/* <Route
                            path="/SavedProducts"
                            element={
                                <SavedProducts products={products} />
                            }></Route> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
