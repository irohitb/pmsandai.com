import React from "react"
import "./container2.css"
import Container2 from "./../assests/container-2.png"
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

const container2 = () => {

    return (
        <div id="products" className="container2-main-class">
            <div className="new-container-class">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <Fade left cascade duration={1100}> <div className="container-2-text">
                            <h1 className="container2-heding"> PMS and AI vs Mutual Funds</h1>
                            <p className="container2-para-1">The difference between successful and really successful people is that really successful people say no to almost everything - <strong>Warren Buffett</strong> </p>
                            <p className="conatiner2-para-2">Above quote explains how PMS and AlFs are different from Mutual funds. PMSs focusses on a few selected companies and says no to the rest, whereas Mutual funds are made to follow too diversified approach because these are products meant for masses. Though, this helps mutual funds in reducing volatility to an extent, but more doesn't always mean low risk, and in fact exposure to more companies may increase the risk of buying less known. Also, high diversification beyond a point comes at a cost of limiting potential long term performance as in general, most mutual funds hold 40 -70 stocks making it no different than an index.</p>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <Fade bottom duration={2000}>  <div className="container2-image">
                        </div>
                        </Fade>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default container2
