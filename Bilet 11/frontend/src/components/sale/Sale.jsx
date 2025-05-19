import React from 'react'
import "./Sale.css"
import saleImg from "../../assets/images/blog_1.jpg.webp"

const Sale = () => {
    return (
        <section id="sale-area">
            <div className="container">
                <div className="sale-h">
                    <h2>Big Sale!</h2>
                </div>
                <div className="sale">
                    <div className="sale-img">
                        <img src={saleImg} alt="" />
                    </div>
                    <div className="sale-title">
                        <h3>50% less in all items</h3>
                        <span>By Carl Smith • September 3, 2018</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                        <div className="sale-btn">
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale