import React from 'react'
import "./Hero.css"
import heroImg from "../../assets/images/person_transparent.png.webp"

const Hero = () => {
    return (
        <section id="hero-area">
            <div className="container">
                <div className="hero">
                    <div className="hero-title">
                        <h1>Madewell</h1>
                        <h4>Summer Colection</h4>
                        <div className="hero-spans">
                            <span>1,499</span>
                            <span className='hero-price'>$1,999</span>
                        </div>
                        <div className="hero-btns">
                            <button className='hero-btn'>Shop now</button>
                            <button className='btn-hero'>Shop now</button>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero