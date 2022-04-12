import styles from "./Quantity.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Quantity = ({ onChange, value }) => {
    return (
        <div className={styles.Quantity}>
            <FontAwesomeIcon
                icon={faCircleMinus}
                className={styles.Searchbar__Icon}
                size="lg"
                onClick={() => {
                    onChange(value - 1);
                }}
            />
            <p>{value}</p>
            <FontAwesomeIcon
                icon={faCirclePlus}
                className={styles.Searchbar__Icon}
                size="lg"
                onClick={() => {
                    onChange(value + 1);
                }}
            />
        </div>
    );
};

export default Quantity;
