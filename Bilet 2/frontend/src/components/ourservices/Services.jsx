import React from "react";
import "./Services.css";
import { FaChartPie } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdBeenhere } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";

const Services = () => {
  return (
    <section id="service-area">
      <div className="container">
        <div className="row">
          <div className="services">
            <h4>Our Services</h4>
            <h2>We Offer Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4 service">
            <div className="service-icon">
              <span>
                <FaChartPie />
              </span>
            </div>
            <div className="service-title">
              <h4>Business Consulting</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>
          <div className="col-4 service">
            <div className="service-icon">
              <span>
                <FaBackspace />
              </span>
            </div>
            <div className="service-title">
              <h4>Business Consulting</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>
          <div className="col-4 service">
            <div className="service-icon">
              <span>
                <IoMdTimer />
              </span>
            </div>
            <div className="service-title">
              <h4>Business Consulting</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>
          <div className="col-4 service">
            <div className="service-icon">
              <span>
                <MdBeenhere />
              </span>
            </div>
            <div className="service-title">
              <h4>Business Consulting</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>
          <div className="col-4 service">
            <div className="service-icon">
              <span>
                <MdBusinessCenter />
              </span>
            </div>
            <div className="service-title">
              <h4>Business Consulting</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>
          <div className="col-4 service">
            <div className="service-icon">
              <span>
                <IoMdCloudDone />{" "}
              </span>
            </div>
            <div className="service-title">
              <h4>Business Consulting</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
