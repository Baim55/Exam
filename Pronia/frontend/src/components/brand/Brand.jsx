import React from 'react'
import brandimg from "../../assets/images/1-1170x300.webp"
import brand1 from "../../assets/images/1-1 (1).webp"
import brand2 from "../../assets/images/1-2.webp"
import brand3 from "../../assets/images/1-3.webp"
import brand4 from "../../assets/images/1-4.webp"
import brand5 from "../../assets/images/1-5.webp"
import "./Brand.css"

const Brand = () => {
    return (
        <section id="brand-area">
            <div className="container">
                <div className="banner-wrapper">
                    <img src={brandimg} alt="" className="banner-img" />
                    <div className="row">
                        <div className="col-2">
                            <div className="brand-img">
                                <img src={brand1} alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="brand-img">
                                <img src={brand2} alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="brand-img">
                                <img src={brand3} alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="brand-img">
                                <img src={brand4} alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="brand-img">
                                <img src={brand5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand