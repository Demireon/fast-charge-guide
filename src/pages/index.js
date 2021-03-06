import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

class Homepage extends React.Component {
    render() {
        const siteTitle = "Iphone Fast Charge Guide";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Apple doesn't have what you need
                                    for fast charging out of the box</h2>
                            </header>
                            <p>If you have an Iphone 8 or later, your phone is capable of an 18W power draw speed to charge it's battery - 
                            And the basic charger that came out of the box only maxes out delivery at a 5W speed.
                            </p>
                            <p><strong>Thats a huge difference.</strong></p>
                        </div>
                        <div className="col-3">
                            <span className="icon style2 major fa-battery-empty fa-2x"></span>
                            <span className="icon style2 major fa-battery-quarter fa-2x"></span>
                        </div>
                        <div className="col-3">
                        <span className="icon style2 major fa-battery-half fa-2x"></span>
                            <span className="icon style2 major fa-battery-full fa-2x"></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                            </ul>
                        </div>
                        <div className="col-6" align="center">
                            <header className="major">
                                <h2>What do you need to fast charge your phone? Two things!</h2>
                            </header>
                            <header>
                                <i className="icon major fa-plug"><h2>a USB-C to Lightning cable</h2></i>
                            </header>
                            <header>
                                <i className="icon major fa-square"><h2>and a suitabe Power adapter</h2></i>
                            </header>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2><u>Step 1</u></h2>
                                <h2>Cable</h2>
                            </header>
                            <p>You will need a lightning cable with a Type C specification</p>
                        </div>
                    

                        <div className="col-4">
                            <span className="icon style2 major fa-apple fa-2x"></span>
                            <h3>Apple Lightning to USB-C Cable</h3>
                            <ul className="actions">
                                <li><a href="https://amzn.to/2XENeg5" target="_blank" rel="noopener noreferrer" className="button">Read More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="icon style2 major fa-bell fa-2x"></span>
                            <h3>Belkin Boost Charge Cable</h3>
                            <ul className="actions">
                                <li><a href="https://amzn.to/2xkcYj9" target="_blank" rel="noopener noreferrer" className="button">Read More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="icon style2 major fa-anchor fa-2x"></span>
                            <h3>Anker USB C to Lightning Cable</h3>
                            <ul className="actions">
                                <li><a href="https://amzn.to/2FJODYR" target="_blank" rel="noopener noreferrer" className="button">Read More</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </section>

                <section id="four" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2><u>Step 2</u></h2>
                                <h2>Power adapter</h2>
                            </header>
                            <p>You will need a wall charger capable of at least an 18 watt power draw</p>
                        </div>

                        <div className="col-4">
                        <span className="icon style2 major fa-apple fa-2x"></span>
                            <h3>Apple 18W USB-C Power Adapter</h3>
                            <ul className="actions">
                                <li><a href="https://amzn.to/2NkPYLR" target="_blank" rel="noopener noreferrer" className="button">Read More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                        <span className="icon style2 major fa-anchor fa-2x"></span>
                            <h3>Anker 30W USB-C Power Adapter</h3>
                            <ul className="actions">
                                <li><a href="https://amzn.to/2Xk588M" target="_blank" rel="noopener noreferrer" className="button">Read More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                        <span className="icon style2 major fa-key fa-2x"></span>
                            <h3>Aukey 27W USB-C Power Adapter</h3>
                            <ul className="actions">
                                <li><a href="https://amzn.to/2NippXt" target="_blank" rel="noopener noreferrer" className="button">Read More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;