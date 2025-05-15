import React from 'react'
import collec1 from "../../assets/images/product_1.jpg.webp"
import collec2 from "../../assets/images/product_2.jpg.webp"
import collec3 from "../../assets/images/product_3.jpg.webp"
import "./Collec.css"

const Collec = () => {
    return (
        <section id="collection">
            <div className="container">
                <div className="collections">
                    <div className="collec">
                        <h1 style={{textAlign:"center"}}>Collections</h1>
                    </div>
                    <div className="collection">
                        <div className="collec-title">
                            <img src={collec1} alt="" />
                            <h3>The Shoe</h3>
                            <p>Summer Cllection</p>
                            <p className='price'>$9.50</p>
                        </div>
                    </div>
                    <div className="collection">
                        <div className="collec-title">
                            <img src={collec2} alt="" />
                            <h3>Marc Jacobs Bag</h3>
                            <p>Summer Cllection</p>
                            <p className='price'>$9.50 <span>$30.00</span></p>
                        </div>
                    </div>
                    <div className="collection">
                        <div className="collec-title">
                            <img src={collec3} alt="" />
                            <h3>The Belt</h3>
                            <p>Summer Cllection</p>
                            <p className='price'>$9.50</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collec