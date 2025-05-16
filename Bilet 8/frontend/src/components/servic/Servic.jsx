import React from 'react'
import carimg from "../../assets/images/car.webp"
import cardimg from "../../assets/images/card.webp"
import serviceimg from "../../assets/images/service.webp"
import "./Servic.css"

const Servic = () => {
    return (
        <section id="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="service">
                            <div className="service-img">
                                <img src={carimg} alt="" />
                            </div>
                            <div className="service-title">
                                <h5>Free Shipping</h5>
                                <p>Capped at $319 per order</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="service">
                            <div className="service-img">
                                <img src={cardimg} alt="" />
                            </div>
                            <div className="service-title">
                                <h5>Safe Payment</h5>
                                <p>With our payment gateway</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="service">
                            <div className="service-img">
                                <img src={serviceimg} alt="" />
                            </div>
                            <div className="service-title">
                                <h5>Best Services</h5>
                                <p>Friendly & Supper Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servic