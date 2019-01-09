import React from "react"
import "./container4.css"
import Image1 from "./../assests/path_6.png"
import Image2 from "./../assests/container4.png"
import Who from "./../assests/a2.png"
import Mission  from "./../assests/a1.png"
import Vision from "./../assests/a3.png"
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';


const container4 = () => {
    return (
        <div id="about-us" className="container-4-main-class">

            <div className="new-container-class">
                 <div className="row">
                 <Fade bottom cascade duration={2000}>
                    <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                        <div className="container4-left-main-class">
                        <h1 className="container4-about-us"> About Us </h1>
                        <div className="container4-text=boxes txt-margin">
                            <div className="container4-header-boxes">
                                <div className="container4-header-boxes-images">
                                <img src={Who} class="radius" width="32" height="32"/>
                                </div>
                                <h2 className="container4-header-boxes-heading"> Who we are?</h2>
                            </div>
                            <p className="container-4-header-boxes-para"> We represent a Wealth Management firm pursuing the goal of taking Right investment products to Right investors. Our company's business mantra is "Simply Ethical". This is a combination three pronged approach as represented in a picture mentioned below
        Integrity + In depth Research + Unbiased Advice.</p>
                        </div>
                        <div className="container4-text=boxes txt-margin">
                            <div className="container4-header-boxes">
                                <div className="container4-header-boxes-images">
                                    <img src={Vision} class="radius" width="32" height="32"/>
                                </div>
                                <h2 className="container4-header-boxes-heading">Our Vision</h2>
                            </div>
                            <p className="container-4-header-boxes-para"> Be a Next Gen brand known for performance and excellent service in wealth management industry. </p>
                        </div>
                        <div className="container4-text=boxes txt-margin">
                            <div className="container4-header-boxes">
                                <div className="container4-header-boxes-images">
                                 <img src={Mission} class="radius" width="32" height="32"/>
                                </div>
                                <h2 className="container4-header-boxes-heading">Our Mission</h2>
                            </div>
                            <p className="container-4-header-boxes-para"> Provide best in class investment products that are relevant to the profiles of informed and savvy investors.
It is easy to socialize and sell, which is what most firms do, it is equally difficult to maintain insight & integrity which is what strive for. </p>
                        </div>
                        </div>
                    </div>
               </Fade>
              <Fade right duration={3000}>
                <div className=" col-md-6 col-lg-6 col-12 col-sm-12">
                    <div className="container4-image-box">
                        <img src={Image2} className="container-4-image"/>
                    </div>
                </div>
              </Fade>
                </div>
            </div>

        </div>
    )
}

export default container4;
