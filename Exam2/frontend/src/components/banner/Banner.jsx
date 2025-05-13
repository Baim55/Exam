import React from 'react'
import banner1 from "../../assets/images/banner_1.jpg.webp"
import banner2 from "../../assets/images/banner_2.jpg.webp"
import banner3 from "../../assets/images/banner_3.jpg.webp"
import "./Banner.css"

const Banner = () => {
    return (
        <section id="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="banner-title">
                            <div className="banner-img">
                                <img src={banner1} alt="" />
                            </div>
                            <div className="banner-category">
                                <h4>Women's</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="banner-title">
                            <div className="banner-img">
                                <img src={banner2} alt="" />
                            </div>
                            <div className="banner-category">
                                <h4>Accessories's</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="banner-title">
                            <div className="banner-img">
                                <img src={banner3} alt="" />
                            </div>
                            <div className="banner-category">
                                <h4>Men's</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner