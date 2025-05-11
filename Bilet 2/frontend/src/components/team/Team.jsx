import React from "react";
import "./Team.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import teamimg1 from "../../assets/images/person_2.jpg.webp";
import teamimg2 from "../../assets/images/person_3.jpg.webp";
import teamimg3 from "../../assets/images/person_4.jpg.webp";

const Team = () => {
  return (
    <section id="team-area">
      <div className="container">
        <div className="row">
            <div className="team">
                <h4>Team</h4>
                <h2>Leadership</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-4 team-person">
            <div className="team-title">
              <img src={teamimg1} alt="" />
              <h3>John Rooster</h3>
              <h4>Co-Founder, President</h4>
              <p>
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
            </div>
            <div className="team-social">
              <div className="icon-circle">
                <FaFacebookF className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaTwitter className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaLinkedinIn className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaInstagram className="social-icon" />
              </div>
            </div>
          </div>
          <div className="col-4 team-person">
            <div className="team-title">
              <img src={teamimg2} alt="" />
              <h3>Tom Sharp</h3>
              <h4>Co-Founder, COO</h4>
              <p>
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
            </div>
            <div className="team-social">
              <div className="icon-circle">
                <FaFacebookF className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaTwitter className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaLinkedinIn className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaInstagram className="social-icon" />
              </div>
            </div>
          </div>
          <div className="col-4 team-person">
            <div className="team-title">
              <img src={teamimg3} alt="" />
              <h3>Winston Hodson</h3>
              <h4>Marketing</h4>
              <p>
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
            </div>
            <div className="team-social">
              <div className="icon-circle">
                <FaFacebookF className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaTwitter className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaLinkedinIn className="social-icon" />
              </div>
              <div className="icon-circle">
                <FaInstagram className="social-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
