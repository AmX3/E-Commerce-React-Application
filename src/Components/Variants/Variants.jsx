import { useContext } from "react";
import { CartContext } from "../../Context/CartItemContext";
import styles from "./Variants.module.scss";

const Variants = ({ size, setVariant }) => {
    return (
        <div className={styles.Variants}>
            <label htmlFor="size">
                <strong>Select a size: </strong>
            </label>
            <select
                name="size"
                onInput={setVariant}
                defaultValue={"Default"}
                required>
                <option disabled></option>
                {size.map((variant) => {
                    return <option key={variant}>{variant}</option>;
                })}
            </select>
        </div>
    );
};

export default Variants;
