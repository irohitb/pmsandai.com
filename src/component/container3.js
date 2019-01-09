import React from "react"
import "./container3.css"
import box1 from "./../assests/box1.png"
import box2 from "./../assests/box2.png"
import box3 from "./../assests/box3.png"
import box4 from "./../assests/box4.png"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const container3 = () => {
    return (
        <div className="container-3-main-class">
            {/* Desktop Class */}

                    <div className="new-container-class">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-12">
                              <Flip top cascade >  <div class="non-boxes-text">
                                    <h1 className="non-boxes-text-main-heading"> Why and How </h1>
                                    <h1 className="non-boxes-text-main-heading">Portfolio Management Schemes </h1>
                                    <h1 className="non-boxes-text-main-heading">give you an Edge</h1>
                                    <h2 className="non-boxes-text-seconnd-heading">World of Investment Opportunities</h2>
                                    <p className="non-boxes-text-para"></p>
                                   <div className="non-boxes-button">
                                      <p className="non-boxes-button-join-now"> Register </p>
                                    </div>
                                </div>
                              </Flip>
                            </div>
                           <div className="col-md-4 col-lg-4 col-12">
                          <Fade top duration={1500}>
                                   <div className="boxes-text boxes-text-1 first-box">
                                   <div className="container-we-are-different-tick-box-1">
                                       <img src={box1} width="32" height="32" alt="tickBox" />
                                   </div>
                                    <h2 className="boxes-text-heading"> Concentrated, and Focussed </h2>
                                    <p className="para-text"> PMS strategy is meant to invest in concentrated basket of 15-25 well researched companies. Such focused approach generates superior long term performance and is meant for sophisticated and informed investors who really want money to work harder for them and are focused on long term performance and not bothered by short to medium term volatility.</p>
<p className="para-text-b"><strong> Diversification may preserve wealth, but concentration builds wealth - Warren Buffett </strong> </p>
                                </div>
                          </Fade>
                          <Fade left duration={1500}>
                                <div className="boxes-text boxes-text-1 ">
                                <div className="container-we-are-different-tick-box-1">
                                    <img src={box3} width="32" height="32" alt="tickBox" />
                                </div>
                                    <h2 className="boxes-text-heading"> You own your own portfolio </h2>
                                    <p className="para-text"> PMS strategy works on the concept of personal demat holding and with common research, and not a pooled stock portfolio across investors. With the rising participation of young and retail investors in mutual funds, pooled stock portfolio concept is prone impulsive and behavioral flows which rise with rising markets and peak out at higher valuations, and fall with falling markets and bottom out at attractive valuations. In PMS, one investors behavioral reactions to market movements doesnt impact other investors portfolios.</p>
<p className="para-text-b"><strong>Time is your friend and impulse is your enemy - John C Bogl </strong></p>
                                </div>
                          </Fade>
                            </div>
                            <div className="col-md-4 col-lg-4 col-12">
                          <Fade right duration={1500}>
                                   <div className="boxes-text first-box">
                                   <div className="container-we-are-different-tick-box-1">
                                       <img src={box2} width="32" height="32" alt="tickBox" />
                                   </div>
                                    <h2 className="boxes-text-heading"> Own businesses, and not units</h2>
                                    <p className="para-text"> PMS strategy gives access to direct shareholding in the businesses making it a more direct method of investing. When one invest in companies, it opens the door to not only growing with the rise in corporate earnings and dividends, but also the growth of investors own intellectual capital as here investor clearly gets to know whats happening in the portfolio. In long term, growth in all three matters and adds up.</p>
<p className="para-text-b"><strong>Successful investing is about owning businesses and reaping the huge rewards provided by the dividends and corporate earnings - John C Bogl </strong></p>
                                </div>
                          </Fade>
                          <Fade right duration={1500}>
                                <div className="boxes-text">
                                <div className="container-we-are-different-tick-box-1">
                                    <img src={box4} width="32" height="32" alt="tickBox" />
                                </div>
                                    <h2 className="boxes-text-heading"> Buy and hold, with low churn</h2>
                                    <p className="para-text"> Since PMS works with a concentrated approach, there is no compulsion to churn a stock that is performing irrespective of if its rising weight in the portfolio over years. What matters is the expected earnings and growth potential in the businesses held. Unlike this, in mutual funds, beyond a point, at times fund manager may be forced to let go of a performing stock to cut its rising weight, given the regulations.</p>
<p className="para-text-b"><strong>Our favorite holding period is forever - Warren Buffett </strong> </p>
                                </div>
                          </Fade>
                            </div>

                        </div>
                    </div>
    </div>
    )
}

export default container3;
