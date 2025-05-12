import React from 'react'
import "./Hero.css"
import backimg from "../../assets/images/1-1.webp"
import heroimg from "../../assets/images/1-2-524x617.webp"

const Hero = () => {
    return (
        <section id="hero-area">
            <img src={backimg} alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="hero-title">
                            <h2>65% OFF</h2>
                            <h1>New Plant</h1>
                            <p>Pronia,With 100% Natural, Organic & Plant Shop</p>
                            <button>Discover Now</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="hero-image">
                            <img src={heroimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero