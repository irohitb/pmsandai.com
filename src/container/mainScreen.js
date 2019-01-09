import React, { Component } from "react"
import Navbar from "./../component/navbar.js"
import Container1 from "./../component/container1.js"
import Container2 from "./../component/container2.js"
import Container3 from "./../component/container3.js"
import Container4 from "./../component/container4.js"
import Container5 from "./../component/container5.js"
import Container7 from "./../component/container7.js"
import Container6 from "./../component/container6.js"
import Footer from "./../component/footer.js"
import "./mainScreen.css"
import Logo from "./../assests/logo.png"
import Fade from 'react-reveal/Fade';

class mainScreen extends Component {

    constructor () {
        super ()
        this.height  = 0
    }

    state = {
        displayOtherText: false
    }

    mouseNotOnImage = () => {
        console.log("mouse not")
        this.setState({displayOtherText: false})
   }

   mouseOnImage = () => {
    console.log("mouse on")
    this.setState({displayOtherText: true})
   }

    render () {
        return (

                <div className="main-screen-core-class">
                        <Navbar />
                        <Container1 />
                        <Container3 />
                        <Container2 />
                        <Container4 />
                        <Container5 />
                        <Container6 />
                        <Container7 />
                        <Footer />
                </div>

        )
    }
}

export default mainScreen
