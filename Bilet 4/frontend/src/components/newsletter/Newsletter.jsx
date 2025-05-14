import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <section id="newsletter">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                </div>
                <div className="col-6 send">
                    <input type="email" placeholder='Your email' className='news-input'/>
                    <button type='submmit' className='news-btn'>Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter