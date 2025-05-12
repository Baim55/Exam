import React from 'react'
import "./Latest.css"
import latest1 from "../../assets/images/1-1-310x220.webp"
import latest2 from "../../assets/images/1-2-310x220.webp"
import latest3 from "../../assets/images/1-3-310x220.webp"

const Latest = () => {
    return (
        <section id="latest-area">
            <div className="container">
                <div className="row">
                    <h1>Latest Area</h1>
                    <p className='cont'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots <br /> in a piece of classical Latin literature</p>
                </div>
                <div className="row">
                    <div className="col-4 admin">
                        <div className="latest-title">
                            <span>BY:ADMIN 24 APRIL 2021</span>
                            <h2>Maecenas Laoreet Massa</h2>
                            <p>Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                                sed do eiusmod tempor incidio ut labore et dolore magna aliqua.</p>
                            <img src={latest1} alt="" />
                        </div>
                    </div>
                    <div className="col-4 admin">
                        <div className="latest-title">
                        <span>BY:ADMIN 24 APRIL 2021</span>
                        <h2>Maecenas Laoreet Massa</h2>
                        <p>Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                            sed do eiusmod tempor incidio ut labore et dolore magna aliqua.</p>
                        <img src={latest2} alt="" />
                    </div></div>
                    <div className="col-4 admin" >
                        <div className="latest-title">
                        <span>BY:ADMIN 24 APRIL 2021</span>
                        <h2>Maecenas Laoreet Massa</h2>
                        <p>Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                            sed do eiusmod tempor incidio ut labore et dolore magna aliqua.</p>
                        <img src={latest3} alt="" />
                    </div></div>
                </div>
            </div>
        </section>
    )
}

export default Latest