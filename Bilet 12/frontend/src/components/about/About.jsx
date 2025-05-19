import React from 'react'
import "./About.css"
import aboutImg from "../../assets/images/about-2.jpg.webp"

const About = () => {
    return (
        <section id="about-area">
            <div className="container">
                <div className="about">
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about-title">
                        <span>ABOUT TASTY</span>
                        <h3>Our chef cooks the most delicious food for you</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About