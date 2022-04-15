import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar";
import CarouselFP from "../../Components/CarouselFP/CarouselFP";

const Home = () => {
    return (
        <div>
            <Navbar />
            <CarouselFP />
        </div>
    );
};

export default Home;
