import React from "react"
import LogoImage from "./../assests/logo_new_1_ek1.png"
import "./navbar.css"

import Linkedin from "./../assests/linkedin.png"
import Facebook from "./../assests/facebook.png"
import twitter from "./../assests/twitter.png"



const navbar = () => {

    return (
       <div>
              {/* Desktop Navclass */}

        <div class="d-none d-lg-block" id="myHeader">
            <nav class="custom-navbar-class-top navbar-expand-lg  ">
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav navbar-nav-top mr-auto-top">
            <li class="nav-item nav-item-desktop-top-left active">
                <a class="nav-link top-nav-text" href="#">Equity Portfolio & Alternative Investments</a>
            </li>
            </ul>

                <ul class="navbar-nav navbar-nav-top mr-auto">

                <li class="nav-item nav-item-desktop-top">
                    <a class="nav-link" href="https://advicesense.com">Contact Us</a>
                </li>
                </ul>

                            <div className="header-social-icons">
                                <img src={Linkedin} width="30px" height="30px" className="header-social-icons-image"/>
                                <img src={Facebook} width="30px" height="30px" className="header-social-icons-image"/>
                                <img src={twitter} width="30px" height="30px" className="header-social-icons-image"/>
                            </div>

              </div>
            </nav>

            <nav class="custom-navbar-class navbar-expand-lg ">
                <a class="navbar-brand navbar-brand-desktop" href="#">
                    <img src={LogoImage} width="200" height="75" alt="" class="image-navbar-class"/>
                </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item nav-item-desktop active">
                            <a class="nav-link" href="#products">Products</a>
                        </li>
                        <li class="nav-item nav-item-desktop">
                            <a class="nav-link" href="#about-us">About us</a>
                        </li>
                        <li class="nav-item nav-item-desktop">
                            <a class="nav-link" href="#expert-reviews">Expert Reviews</a>
                        </li>
                        <li class="nav-item nav-item-desktop">
                            <a class="nav-link" href="#">Blogs</a>
                        </li>
                        </ul>
                        <div class="right-navbar-desktop">
                            <p class="navbar-text navbar-text-desktop">
                            Register | Login
                            </p>
                        </div>
                    </div>
                </nav>
        </div>

       {/* Mobile class */}
        <div class="d-block d-lg-none">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand navbar-brand-mobile" href="#">
                            <img src={LogoImage} width="180" height="75" alt="" class="image-navbar-class"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link nav-link-mob" href="#products">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mob" href="#about-us">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mob" href="#expert-reviews">Expert Reviews</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mob" href="#">Blogs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mob" href="#">Register | Login</a>
                                </li>
                            </ul>
                </div>
             </nav>
        </div>

  </div>

    )

}

export default navbar
