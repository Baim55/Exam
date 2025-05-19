import React from 'react'
import "./Guest.css"
import guestImg from "../../assets/images/person_1.jpg.webp"

const Guest = () => {
  return (
    <section id="guest-area">
        <div className="container">
            <div className="guest-title">
                <p>GUESTS SAYS</p>
                <h2>Our Satisfied Guests says</h2>
            </div>
            <div className="guests">
                <div className="guest">
                    <img src={guestImg} alt="" />
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p>Dennis Green</p>
                    <span>Guests from Italy</span>
                </div>
                <div className="guest">
                    <img src={guestImg} alt="" />
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p>Dennis Green</p>
                    <span>Guests from Italy</span>
                </div>
                <div className="guest">
                    <img src={guestImg} alt="" />
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p>Dennis Green</p>
                    <span>Guests from Italy</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Guest