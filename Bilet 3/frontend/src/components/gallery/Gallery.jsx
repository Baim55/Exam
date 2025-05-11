import React from "react";
import "./Gallery.css";
import galleryimg1 from "../../assets/images/menu_1.jpg.webp"
import galleryimg2 from "../../assets/images/menu_2.jpg.webp"
import galleryimg3 from "../../assets/images/menu_3.jpg.webp"

const Gallery = () => {
  return (
    <section id="gallery-area">
      <div className="container">
        <div className="row">
          <div className="gallery-title">
            <h2>Gallery</h2>
            <div className="row gallery-desc">
              <div className="col-7">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gallery">
          <div className="col-4">
            <img src={galleryimg1} alt="" />
          </div>
          <div className="col-4">
            <img src={galleryimg2} alt="" />
          </div>
          <div className="col-4">
            <img src={galleryimg3} alt="" />
          </div>
          <div className="col-4">
            <img src={galleryimg2} alt="" />
          </div>
          <div className="col-4">
            <img src={galleryimg3} alt="" />
          </div>
          <div className="col-4">
            <img src={galleryimg1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
