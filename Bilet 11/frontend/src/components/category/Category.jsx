import React from 'react'
import "./Category.css"
import categoryImg1 from "../../assets/images/women.jpg.webp"
import categoryImg2 from "../../assets/images/children.jpg.webp"
import categoryImg3 from "../../assets/images/men.jpg.webp"

const Category = () => {
    return (
        <section id="category-area">
            <div className="container">
                <div className="category-div">
                    <div className="category">
                        <div className="category-img">
                            <img src={categoryImg1} alt="" />
                        </div>
                        <div className="category-title">
                            <p>Collections</p>
                            <h2>Womens</h2>
                        </div>
                    </div>
                    <div className="category">
                        <div className="category-img">
                            <img src={categoryImg2} alt="" />
                        </div>
                        <div className="category-title">
                            <p>Collections</p>
                            <h2>Children</h2>
                        </div>
                    </div>
                    <div className="category">
                        <div className="category-img">
                            <img src={categoryImg3} alt="" />
                        </div>
                        <div className="category-title">
                            <p>Collections</p>
                            <h2>Men</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category