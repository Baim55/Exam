import React from "react";
import client1 from "../../assets/images/client_logo_1.png.webp";
import client2 from "../../assets/images/client_logo_2.png.webp";
import client3 from "../../assets/images/client_logo_3.png.webp";
import client4 from "../../assets/images/client_logo_4.png.webp";
import client5 from "../../assets/images/client_logo_5.png.webp";
import "./ClientLogo.css";

const ClientLogo = () => {
  return (
    <section id="client-area">
      <div className="container">
        <div className="client-logo">
          <div className="client-img">
            <img src={client1} alt="" />
          </div>
          <div className="client-img">
            <img src={client2} alt="" style={{ filter: " grayscale(1)" }} />
          </div>
          <div className="client-img">
            <img src={client3} alt="" />
          </div>
          <div className="client-img">
            <img src={client4} alt="" />
          </div>
          <div className="client-img">
            <img src={client5} alt="" />
          </div>
          <div className="client-img">
            <img src={client4} alt="" />
          </div>
          <div className="client-img">
            <img src={client3} alt="" />
          </div>
          <div className="client-img">
            <img src={client1} alt="" />
          </div>
          <div className="client-img">
            <img src={client5} alt="" />
          </div>
          <div className="client-img">
            <img src={client2} alt="" style={{ filter: " grayscale(1)" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
