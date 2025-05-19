import React from "react";
import "./Guest.css";
import guestImg from "../../assets/images/person_1.jpg.webp";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

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
            <p>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalfStroke className="star" />
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>Dennis Green</p>
            <span>Guests from Italy</span>
          </div>
          <div className="guest">
            <img src={guestImg} alt="" />
            <p>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalfStroke className="star" />
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>Dennis Green</p>
            <span>Guests from Italy</span>
          </div>
          <div className="guest">
            <img src={guestImg} alt="" />
            <p>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalfStroke className="star" />
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>Dennis Green</p>
            <span>Guests from Italy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guest;
