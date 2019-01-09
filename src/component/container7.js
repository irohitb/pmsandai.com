import React from "react"
import "./container7.css";
import Fade from 'react-reveal/Fade';
import Pmob from "./../assests/pmob.png"
const container7 = () => {
    return (
        <div>
              <div className="d-none d-md-block">

                <Fade bottom cascade duration={2000}>
              <div className="subscribe-to-quaterly-desktop">
                  <div className="subscribe-to-quaterly-desktop-sub">
                      <div className="subscrible-to-quaterly-heading">
                          <h2 className="subscribe-to-quaterly-heading"> Subscribe To Our Quaterly Magzine</h2>
                      </div>
                      <form class="form-inline form-inline-desktop">
                          <div class="form-group mx-sm-3 mb-2">
                              <input type="email-address" class="form-control" id="inputPassword2" placeholder="Enter Email-address" />
                      </div>
                      <button type="submit" class="btn footer-button"> Subscribe</button>
                    </form>
                  </div>
              </div> </Fade>
            </div>
            {/* Mobile Class */}
                <div className="d-block d-md-none">
                
                        <div className="subscibe-to-quaterly-mobile-main">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="subscibe-to-quaterly-mobile-heading">  Subscribe To Our Quaterly Magzine </h2>
                                    </div>
                                    <div className="col-12">
                                        <form class="form-inline form-inline-mobile">
                                            <div class="form-group mx-sm-3 mb-2">
                                                <input type="email-address" class="form-control" id="inputPassword2" placeholder="Enter Email-address" />
                                            </div>
                                            <button type="submit" class="btn footer-button"> Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                </div>
        </div>
    )
}

export default container7
