import React from 'react'
import { FaTruck } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoMdHelp } from "react-icons/io";
import "./Servic.css"

const Servic = () => {
    return (
        <section id="servic-area">
            <div className="container">
                <div className="servic">
                    <div className="servic-div">
                        <div className="servic-icon">
                            <FaTruck />
                        </div>
                        <div className="servic-title">
                            <h5>FREE SHIPPING</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="servic-div">
                        <div className="servic-icon">
                            <IoMdRefresh />
                        </div>
                        <div className="servic-title">
                            <h5>FREE RETURNS</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="servic-div">
                        <div className="servic-icon">
                            <IoMdHelp />
                        </div>
                        <div className="servic-title">
                            <h5>CUSTOMER SUPPORT</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servic