import React, { Component} from "react"
import "./container6.css"
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import PlusSign from "./../assests/checkmark.png"
class container6 extends Component {

    state = {
        q1: true,
        q2: false,
        q3: false,
        q4: false,
        q5: false
    }


    questionAndAnswerToggler = (event) => {
      if (event === "q1")  this.setState({[event]: !this.state[event], q2: false, q3: false, q4: false,  q5: false})
      if (event === "q2")  this.setState({[event]: !this.state[event], q1: false, q3: false, q4: false,  q5: false})
      if (event === "q3")  this.setState({[event]: !this.state[event], q2: false, q1: false, q4: false,  q5: false})
      if (event === "q4")  this.setState({[event]: !this.state[event], q2: false, q3: false, q1: false,  q5: false})
      if (event === "q5")  this.setState({[event]: !this.state[event], q2: false, q3: false, q4: false,  q1: false})
    }
    render () {
      return (
            <div id="expert-reviews" className="container-6-main-class">
                <div className="new-container-class">
                    <div className="">
                        <div className="row">
                          <Fade bottom cascade duration={2000}>
                            <div className="col-md-5 col-lg-5">
                                    <div className="container-6-Q-A-section-main">
                                        <h1 className="container-6-QandA-heading"> Expert Reviews</h1>
                                        <p className="con"> Here we're committed to bring you the views of the people from across the industry. Every month we touch the base eith 3 Industry Experts managing Portfolio Management Schemes to answer the current topics related to the financial markets.</p>
                                        <div className="container-6-QandA-main" onClick={() => this.questionAndAnswerToggler("q1")}>
                                            <div className="container-6-QandA-Q-heading">
                                                <h3 className="container-6-learn"> Mr. Rajesh Kothari</h3>
                                                <h5 className="designation"> Founder & MD of ALFAccurate Advisors</h5>
                                            </div>
                                            { this.state.q1 ? <p className="container-6-QandA-Q-answer">He has total industry experience of more than 2 decades. As a fund manager at DSP Merrill Lynch Fund Managers (now DSP BlackRock Investment Managers), the qeuity assets under management flourished from USD 100mn to USD 1.4bn. All though this period of five years, the equity schemes often ranked in its 1st Quartile Ranking' by CRISIL, a standard &Poor's affiliate. CNBC, CRISIL, Mylris and other recognized his performance and awarded him for deliviring unvivalled risk-adjusted returns. Aditionally, he won CRISIL Mutual Fund of the Year Award in 2006 for DSP Merrill Lynch Equity Fund. He then founded ALFAccurate Advisors in 2009 and has been managing his own PMS giving a stellar return of 20% compounded anually.</p>
                                            : null }
                                        </div>
                                </div>
                            </div>
                            </Fade>
                            <Fade right duration={3000}>
                            <div className="col-md-7 col-lg-7">
                                <div className="container6-timeline-box-desktop">
                                    <h1 className="container-6-the-timeline"> Jan, 2018 </h1>
                                </div>
                                <div className="container-6-timeline-heading-desktop-main">
                                    <div className="container-6-timeline-desktop-main-sub">
                                        
                                        </div>
                                            <p className="container-6-text"><strong>Q1. Though year 2018 has seen correction and last 1 year returns have been largely negative, however, valuation of major indices still appear to be high. Do you think so? And  what is your recommendation to equity investors ?
                                            </strong></p>
                                            <p className="container-6-text">A1. Firstly, equity market is for long term investors and hence investors should look at 5 years returns rather than one year returns.  
                                            </p>
                                            <p className="container-6-text">2018 was year of volatility for both global and local markets as it witnessed 1. Significant rise in crude oil prices from USD 70 to USD 85 in less than 50 days 2. Depreciation of INR by 10% and 3. ILFS default and subsequent NBFC crisis. The concerns had a negative impact on market as well - Nifty corrected by ~15% from its recent peak. It also impacted corporate profitability across sectors as inflation is keeping pressure on demand as well as margins. However, recently, we have witnessed sharp decline in crude oil prices (~30%) and  stability in currency. RBI is taking several measures to increase liquidity in the system. With inflation under control, there is a downward bias to interest rates.  Thus, macro picture is now turning favorable.
                                            </p>
                                            <p className="container-6-text">On valuations, Sensex trades at ~10% PER premium compared to last 10 years average multiples. However, key is revival in earnings growth for valuations to sustain at current levels. While market may remain volatile, we see many opportunities where earnings growth visibility is strong and valuations are attractive. We recommend investors to use any correction as an opportunity to increase allocation to equity asset class with 5+ years of time horizon.
                                            </p>
                                            <p className="container-6-text"><strong>Q2. What Sectors do you foresee outperforming  in 2019 ?
                                            </strong></p>
                                            <p className="container-6-text">A2. Corporate banks which struggled due to NPA issues in last 2-4 years, are expected to witness lower slippage, revival in loan book growth and higher spreads.  Hence we are positive on private sector banking and finance sector. We also like consumer facing businesses like FMCG/consumer durables – higher government spending, reduction in GST rate and new product launches will drive volume growth. Auto ancillary sector is beneficiary of regulatory changes and increase in electronics hence huge opportunity for companies to increase content per vehicle. We also like select companies in  specialty chemicals and capital goods sector.
                                            </p>
                                            <p className="container-6-text"><strong>Q3. Who amongst DII and FII would be more active buyers in your views, Indian equity markets in 2019 ?
                                            </strong></p>
                                            <p className="container-6-text">A3. In my view, liquidity chase fundamentals and it is very difficult to predict liquidity as we are living in dynamic world. Having said that, FIIs can’t afford to ignore India – as it is fastest growing economy. On domestic side, penetration of equity is still very low and hence expect domestic flows to remain strong.  
                                            </p>


                                  </div>
                            </div> </Fade>
                        </div>

                    </div>
                    <div className="d-block d-md-none">

                    </div>
                </div>
            </div>
        )
    }
}

export default container6
