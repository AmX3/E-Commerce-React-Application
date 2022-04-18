import styles from "./Variants.module.scss";

const Variants = ({ size, handleSizeChange }) => {
    return (
        <div className={styles.Variants}>
            <label htmlFor="size">
                <strong>Select a size: </strong>
            </label>
            <select
                name="size"
                onInput={handleSizeChange}
                defaultValue={"Default"}
                required>
                {size.map((variant) => {
                    return (
                        <option key={variant} value={variant}>
                            {variant}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Variants;
