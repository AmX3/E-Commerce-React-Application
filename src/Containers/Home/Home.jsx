import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar";
import CarouselFP from "../../Components/CarouselFP/CarouselFP";

const Home = () => {
    return (
        <>
            <Navbar />
            <CarouselFP />
        </>
    );
};

export default Home;
