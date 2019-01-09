//This should be footer container

import React from "react"
import "./footer.css"
import Footer7 from "./../assests/logo-footer.png"
import Linkedin from "./../assests/linkedin.png"
import Facebook from "./../assests/facebook.png"
import twitter from "./../assests/twitter.png"
const footer = () => {
    return (
        <div className="footer-container-main-class">
            <div className="d-none d-md-block d-lg-block">
                <div className="container">
                    <div className="footer-desktop-class">
                        <div className="footer-desktop-left">
                            <img class="rad" src={Footer7} width="200px" height="50px"/>
                            <h3 className="footer-copyright"> Copyright @ Hewepro Consultants Pvt. Ltd.</h3>
                        </div>
                        <div className="footer-desktop-right">
                            <div className="footer-social-icons">
                                <img src={Linkedin} width="50px" height="50px" className="footer-social-icons-image"/>
                                <img src={Facebook} width="50px" height="50px" className="footer-social-icons-image"/>
                                <img src={twitter} width="50px" height="50px" className="footer-social-icons-image"/>
                            </div>
                            <a href="https://advicesense.com/contact-us/"><h3 className="footer-copyright footer-some-text"> Contact Us</h3></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none">
                <div className="container">
                     <div className="row">

                     <div className="col-6 col-sm-6">
                              <div className="footer-logo-mobile">
                                <img class="rad" src={Footer7} width="150px" height="30px"/>
                             </div>
                            <h3 className="footer-mobile-copyright"> Copyright @ Hewepro Consultants Pvt. Ltd.</h3>
                        </div>

                        <div className="col-6 col-sm-6">
                              <div className="footer-social-icons">
                                <img src={Linkedin} width="30px" height="30px" className="footer-social-icons-image"/>
                                <img src={Facebook} width="30px" height="30px" className="footer-social-icons-image"/>
                                <img src={twitter} width="30px" height="30px" className="footer-social-icons-image"/>
                            </div>
                            <a href="https://advicesense.com/contact-us/"><h3 className="footer-text-mobile"> Contact Us</h3></a>
                        </div>

                    </div>
                 </div>
             </div>
        </div>
    )
}

export default footer
