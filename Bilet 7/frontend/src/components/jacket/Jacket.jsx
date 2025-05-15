import React from 'react'
import "./Jacket.css"
import jacketImg from "../../assets/images/model_woman_1.png.webp"

const Jacket = () => {
    return (
        <section id="jacket-area">
            <div className="container">
                <div className="jacket">
                    <div className="jacket-img">
                        <img src={jacketImg} alt="" />
                    </div>
                    <div className="jacket-title">
                        <p>#new summer collection 2019</p>
                        <h1>Jacket</h1>
                        <button>Shop now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jacket