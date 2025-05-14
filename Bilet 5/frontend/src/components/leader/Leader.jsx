import React from 'react'
import "./Leader.css"
import leader1 from "../../assets/images/2022-08-17_20-58-15.png"
import leader2 from "../../assets/images/download.jfif"
import leader3 from "../../assets/images/KS-INGRAM-5G14301-SLIM-SC-ML-XT-3_01.jpg"

const Leader = () => {
    return (
        <section id="leader-area">
            <div className="container">
                <div className="leader-title">
                <h1>Our leadership</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, eos <br />
                    consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.</p>
            </div>
            <div className="leader-cards">
                <div className="leader-card">
                    <img src={leader1} alt="" />
                    <h6>MINING EXPERT</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!</p>
                </div>
                <div className="leader-card">
                    <img src={leader2} alt="" />
                    <h6>PROJECT MANAGER</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quia veritatis, nam quam obcaecati fuga.</p>
                </div>
                <div className="leader-card">
                    <img src={leader3} alt="" />
                </div>
            </div>
            </div>
        </section>
    )
}

export default Leader