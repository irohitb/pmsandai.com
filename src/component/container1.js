import React, { Component } from "react"
import TickBoxes from "./../assests/ur-icon.png"
import TickBoxes1 from "./../assests/sa-icon.png"
import TickBoxes2 from "./../assests/ua-icon.png"
import "./container1.css";
import screen3 from "./../assests/select.png"

import screen1 from "./../assests/learn.png"
import screen2 from "./../assests/compare.png"
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

class container1 extends Component {

    state = {
        learn: true,
        Compare: false,
        Select: false
    }


    changeActiveState = (event) => {
        if (event === "learn") this.setState({learn: true, Compare: false, Select: false})
        if (event === "Compare") this.setState({Compare: true, learn: false, Select: false})
        if (event === "Select") this.setState({Select: true, Compare: false, learn: false})
    }
    render () {
        return (
            <div className="container-main-class">
            {/*  Desktop */}
                <div class="d-none d-md-block">
                {/* Background Image class */}
                    <div className="container-1-image-desktop">
                    </div>
                    <div className="coontainer-desktop-boxes-main">
                        <div className="container-desktop-boxes" id={this.state.learn ? "container-desktop-boxes-active" : null} onClick={() => this.changeActiveState("learn")}>
                            <h2 className="heading-container-desktop"> Learn </h2>
                            <p className="para-container-desktop"> Learn portfolios in large, mid and multi categories. </p>
                        </div>
                        <div className="container-desktop-boxes" id={this.state.Compare ? "container-desktop-boxes-active" : null}  onClick={() => this.changeActiveState("Compare")}>
                            <h2 className="heading-container-desktop"> Compare </h2>
                            <p className="para-container-desktop"> Compare portfolios on product, portfolio and performance matrices. </p>
                        </div>
                        <div className="container-desktop-boxes" id={this.state.Select ? "container-desktop-boxes-active" : null}  onClick={() => this.changeActiveState("Select")}>
                            <h2 className="heading-container-desktop"> Select</h2>
                            <p className="para-container-desktop"> Get 3 best in each category on the basis of outperformance from respected benchmark </p>
                        </div>
                    </div>

                    {/*  Section 2 */}
                    <div className="container-we-are-different-common">

                            <div className="row">

                                <div className="con-col-5">
                                  <Fade bottom cascade duration={2000}>   <div className="we-are-different-container-desktop">
                                        <h1 className="we-are-different-main-heading-desktop">We're Different!</h1>
                                       <div className="container-element-class">
                                            <div className="row">
                                                    <div className="container-we-are-different-tick-box">
                                                        <img src={TickBoxes} width="100" height="100" alt="tickBox" />
                                                    </div>
                                                    <h2 className="we-are-different-secondary">Unparalleled Research </h2>
                                                </div>
                                            <p className="we-are-different-secondary-para">We perform in-depth research and present data points across product facts, performance facts and portfolio facts, to ensure well informed investments.</p>
                                        </div>
                                        <div className="container-element-class">
                                            <div className="row">
                                                <div className="container-we-are-different-tick-box">
                                                        <img src={TickBoxes2} width="100" height="100" alt="tickBox" />
                                                    </div>
                                                    <h2 className="we-are-different-secondary">Unbiased Advice </h2>
                                                </div>
                                            <p className="we-are-different-secondary-para">We work with zero bias to a few products, as we represent investors' interest and ensure we stick to right counseling in the selection of right investments.</p>
                                        </div>
                                        <div className="container-element-class">
                                            <div className="row">
                                                <div className="container-we-are-different-tick-box">
                                                        <img src={TickBoxes1} width="100" height="100" alt="tickBox" />
                                                    </div>
                                                    <h2 className="we-are-different-secondary"> Suitability Analysis</h2>
                                                </div>
                                            <p className="we-are-different-secondary-para">We under take the responsibility of analyzing investors' risk profile, to ensure that not only right, but suitable investments decisions are made</p>
                                        </div>

                                    </div></Fade>
                                </div>

                                    <div className="con-col-7">
                                    <Fade right cascade duration={3000}>
                                        <div className="container-1-hero-section-image">
                                            { this.state.learn ? <img src={screen1} className="container-1-hero-image" /> : null}
                                            { this.state.Compare ? <img src={screen2}  className="container-1-hero-image" /> : null}
                                            { this.state.Select ? <img src={screen3}  className="container-1-hero-image" /> : null}
                                        </div>
                                        </Fade>
                                </div>
                            </div>

                    </div>

                </div>



            {/*  Mobile */}
                <div class="d-block d-md-none">
                    <div className="container-1-image-mobile">
                    </div>
                    <div className="coontainer-mobile-boxes-main">
                    <div className="slides">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="container-mobile-boxes">
                                        <h2 className="heading-container-mobile"> Learn </h2>
                                        <p className="para-container-desktop"> Learn portfolios in large, mid and multi categories. </p>
                                    </div>
                                </div>
                            <div class="carousel-item">
                                <div className="container-mobile-boxes">
                                    <h2 className="heading-container-mobile"> Compare </h2>
                                    <p className="para-container-desktop"> Compare portfolios on product, portfolio and performance matrices. </p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="container-mobile-boxes">
                                    <h2 className="heading-container-mobile"> Select.</h2>
                                    <p className="para-container-desktop"> get 3 best in each category on the basis of outperformance from respected benchmark </p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            {/*  Container Boxes */}
            <div className="container-we-are-different-common">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12">
                                    <h1 className="we-are-different-main-heading-desktop">We're Different!</h1>
                                    <div className="container-element-class">
                                        <div className="row">
                                            <div className="container-we-are-different-tick-box">
                                                    <img src={TickBoxes} width="100" height="100" alt="tickBox" />
                                                </div>
                                                <h2 className="we-are-different-secondary">Unparalleled Research </h2>
                                            </div>
                                        <p className="we-are-different-secondary-para">We perform in-depth research and present data points across product facts, performance facts and portfolio facts, to ensure well informed investments.</p>
                                    </div>
                                    <div className="container-element-class">
                                        <div className="row">
                                            <div className="container-we-are-different-tick-box">
                                                    <img src={TickBoxes2} width="100" height="100" alt="tickBox" />
                                                </div>
                                                <h2 className="we-are-different-secondary">Unbiased Advice </h2>
                                            </div>
                                        <p className="we-are-different-secondary-para">We work with zero bias to a few products, as we represent investors' interest and ensure we stick to right counseling in the selection of right investments.</p>
                                    </div>
                                    <div className="container-element-class">
                                        <div className="row">
                                            <div className="container-we-are-different-tick-box">
                                                    <img src={TickBoxes1} width="100" height="100" alt="tickBox" />
                                                </div>
                                                <h2 className="we-are-different-secondary"> Suitability Analysis</h2>
                                            </div>
                                        <p className="we-are-different-secondary-para">We under take the responsibility of analyzing investors' risk profile, to ensure that not only right, but suitable investments decisions are made</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
        )
       }
    }


export default container1
