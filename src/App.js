import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./Containers/Home";
import ProductPage from "./Containers/ProductPage";
import SearchProvider from "./Context/SearchContext";

const App = () => {
    return (
        <div>
            <div className={styles.App}>
                <BrowserRouter basename="/E-Commerce-React-Application">
                    <SearchProvider>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route
                                path="/Products"
                                element={<ProductPage />}></Route>
                        </Routes>
                    </SearchProvider>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
