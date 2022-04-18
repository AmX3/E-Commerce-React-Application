import styles from "./Quantity.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Quantity = ({ quantity, onDecrement, onIncrement }) => {
    // Quantity cannot be negative
    const decrement = () => {
        if (quantity !== 0) onDecrement();
    };

    const increment = () => {
        onIncrement();
    };

    return (
        <div className={styles.Quantity}>
            <FontAwesomeIcon
                icon={faCircleMinus}
                className={styles.Quantity__Icon}
                size="lg"
                onClick={decrement}
            />
            <p>{quantity}</p>
            <FontAwesomeIcon
                icon={faCirclePlus}
                className={styles.Quantity__Icon}
                size="lg"
                onClick={increment}
            />
        </div>
    );
};

export default Quantity;
