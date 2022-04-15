import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CarouselFP.module.scss";
import Yuzu from "./../../Images/Yuzu.jpeg";
import Mango from "./../../Images/Mango.jpeg";
import Strawberry from "./../../Images/Strawberry.jpeg";
import Raspberry from "./../../Images/Raspberry.jpeg";

// https://www.tutsmake.com/react-bootstrap-carousel-slider-tutorial/

const CarouselFP = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-15">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src="https://cdn.concreteplayground.com/content/uploads/2017/04/Koi-Ryde-dessert-02-1920x1080.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Indulge Your Imagination</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.concreteplayground.com/content/uploads/2017/04/Koi-Ryde-dessert-01-1920x1080.jpeg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Indulge Your Imagination</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Yuzu}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Indulge Your Imagination</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Strawberry}
                                alt="Fourth slide"
                            />
                            <Carousel.Caption>
                                <h3>Indulge Your Imagination</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Raspberry}
                                alt="Fifth slide"
                            />
                            <Carousel.Caption>
                                <h3>Indulge Your Imagination</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Mango}
                                alt="Sixth slide"
                            />
                            <Carousel.Caption>
                                <h3>Indulge Your Imagination</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default CarouselFP;
