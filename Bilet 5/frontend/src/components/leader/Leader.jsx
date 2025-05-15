import React from "react";
import "./Leader.css";
import leader1 from "../../assets/images/square8.jpg";
import leader2 from "../../assets/images/img_1-2-1.jpg";
import leader3 from "../../assets/images/review-6.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Leader = () => {
  return (
    <section id="leader-area">
      <div className="container">
        <div className="leader-title">
          <h1>Our leadership</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            corporis, eius, eos <br />
            consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.
          </p>
        </div>
        <div className="leader-cards">
          <div className="leader-card">
            <img src={leader1} alt="" />
            <h6>MINING EXPERT</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              repellat. At, soluta. Repellendus vero, consequuntur!
            </p>
            <div className="leader-icons">
              <FaFacebookF className="leader-icon"/>
              <FaTwitter  className="leader-icon"/>
              <FaInstagram  className="leader-icon"/>
            </div>
          </div>
          <div className="leader-card">
            <img src={leader2} alt="" />
            <h6>PROJECT MANAGER</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              quia veritatis, nam quam obcaecati fuga.
            </p>
            <div className="leader-icons">
              <FaFacebookF  className="leader-icon"/>
              <FaTwitter  className="leader-icon"/>
              <FaInstagram  className="leader-icon"/>
            </div>
          </div>
          <div className="leader-card">
            <img src={leader3} alt="" />
            <h6>Engineer</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              quidem, laudantium, illum minus numquam voluptas?
            </p>
            <div className="leader-icons">
              <FaFacebookF  className="leader-icon"/>
              <FaTwitter  className="leader-icon"/>
              <FaInstagram  className="leader-icon"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leader;
