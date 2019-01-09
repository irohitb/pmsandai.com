import React from "react"
import "./container5.css"
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import LovishImage from "./../assests/lovishkataria.png"
import Arvindkaushal from "./../assests/arvindkaushal.png"
import Kamalmanocha from "./../assests/kamalmanocha.png"
const container5 = () => {
    return (
        <div className="container5-main-class">
            <div className="new-container-class">
                <div className="d-none d-md-block">
                  <Fade bottom cascade duration={2000}>
                   <h1 className="container5-the-main-heading"> The Team </h1>
                  </Fade>
                      <Fade right cascade duration={3000}>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-12 team-padding-lovish">
                                <div className="container5-the-team-photo">
                                    <img src={LovishImage} width="100%"  />
                                    <div className="container5-the-team-photo-image-sub">
                                       <a href="https://www.linkedin.com/in/lovishkataria/" target="blank">
                                        <div className="container5-the-team-photo-image-box">
                                            <h2 className="container5-linkedin-text"><strong>in </strong></h2>
                                        </div>
                                      </a>
                                        <div className="container5-the-team-photo-image-sub-text">

                                        <h4 className="container5-the-team-name"> Lovish Kataria</h4>
                                        <p className="container5-the-team-role"> Head – Operations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 col-12 team-padding-kamal">
                                <div className="container5-the-team-photo">
                                    <img src={Kamalmanocha} width="100%"   />
                                    <div className="container5-the-team-photo-image-sub">
                                        <a href="https://www.linkedin.com/in/kamal-manocha-05274328/" target="blank">
                                        <div className="container5-the-team-photo-image-box-active">
                                        </div></a>
                                        <div className="container5-the-team-photo-image-sub-text">
                                        <h4 className="container5-the-team-name">Kamal Manocha</h4>
                                        <p className="container5-the-team-role"> Chief Strategist and Advisor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 col-12 team-padding-arvind">
                                <div className="container5-the-team-photo">
                                    <img src={Arvindkaushal} width="100%"   />
                                    <div className="container5-the-team-photo-image-sub">
                                    <a href="https://www.linkedin.com/in/arvindkaushal/" target="blank">
                                        <div className="container5-the-team-photo-image-box">
                                            <h2 className="container5-linkedin-text"><strong>in </strong></h2>
                                        </div>
                                    </a>
                                        <div className="container5-the-team-photo-image-sub-text">
                                        <h4 className="container5-the-team-name">Arvind Kaushal</h4>
                                        <p className="container5-the-team-role">Chief Technologist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> </Fade>
                        </div>

                        <div className="d-block d-md-none">
                        <h1 className="container5-the-main-heading"> The Team </h1>
                        <div className="row">

                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                                <div className="container5-the-team-photo">
                                    <img src={Kamalmanocha} width="100%"   />
                                    <div className="container5-the-team-photo-image-sub">
                                      <a href="https://www.linkedin.com/in/kamal-manocha-05274328/" target="blank">
                                        <div className="container5-the-team-photo-image-box-active">
                                        </div>
                                      </a>
                                        <div className="container5-the-team-photo-image-sub-text">
                                        <h4 className="container5-the-team-name">Kamal Manocha</h4>
                                        <p className="container5-the-team-role"> Chief Strategist and Advisor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                                <div className="container5-the-team-photo">
                                    <img src={LovishImage} width="100%"   />
                                    <div className="container5-the-team-photo-image-sub">
                                    <a href="https://www.linkedin.com/in/lovishkataria/" target="blank">
                                        <div className="container5-the-team-photo-image-box">
                                            <h2 className="container5-linkedin-text"><strong>in </strong></h2>
                                        </div>
                                    </a>
                                        <div className="container5-the-team-photo-image-sub-text">
                                        <h4 className="container5-the-team-name"> Lovish Kataria</h4>
                                        <p className="container5-the-team-role"> Head – Operations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                                <div className="container5-the-team-photo">
                                    <img src={Arvindkaushal} width="100%"   />
                                    <div className="container5-the-team-photo-image-sub">
                                    <a href="https://www.linkedin.com/in/arvindkaushal/" target="blank">
                                        <div className="container5-the-team-photo-image-box">
                                            <h2 className="container5-linkedin-text"><strong>in </strong></h2>
                                        </div>
                                    </a>
                                        <div className="container5-the-team-photo-image-sub-text">
                                        <h4 className="container5-the-team-name">Arvind Kaushal</h4>
                                        <p className="container5-the-team-role">Chief Technologist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
    )
}

export default container5
