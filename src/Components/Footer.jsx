import React, { useState } from 'react'
import logo from "../images/icons/new_logo3.svg"
import axios from "axios";
const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) return alert("Please enter an email");

        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const res = await axios.post(`${apiUrl}/subscribe`, { email });

            alert(res.data.message);
            console.log(res.data.message)
            setEmail("")
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again!");
        }
    };
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="row">
                    {/* Footer Header */}
                    <div className="footer-header col-lg-12">
                        {/* Footer About */}
                        <div className="footer-about d-flex align-items-center col-lg-6">
                            {/* Logo */}
                            <div className="footer-about-text col-lg-6 ">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="about-footer-content col-lg-6 p-1">
                                <p>Powered by Intent Shūnyaivāham</p>
                            </div>
                        </div>

                        {/* Footer Social Links */}
                        <div className="footer-social-links col-lg-6">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/thesoulshiftoriginal">
                                        <i className="social-icons fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/thesoulshift.world">
                                        <i className="social-icons fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="/">
                                        <i className="social-icons fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="social-icons fa-brands fa-youtube"></i>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-3">
                        <div className="footer-links">
                            <h3>Quick link</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/blogs">Blogs</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Healing Journey Links */}
                    <div className="col-lg-6 col-md-4">
                        <div className="footer-links">
                            <h3>Doorway into your healing journey</h3>
                            <ul>
                                <li><a href="/">Prosperous Finances</a></li>
                                <li><a href="/">Abundant Relationships</a></li>
                                <li><a href="/">Radiant Health</a></li>
                                <li><a href="/">Soul Purpose & Career</a></li>
                                <li><a href="/">Spiritual Growth</a></li>
                                <li><a href="/">Ancestral Clearing</a></li>
                                <li><a href="/">Emotional Healing</a></li>
                                <li><a href="/">Personal Power</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="col-lg-3 col-md-5">
                        <div className="footer-newsletter-box">
                            <div className="footer-links">
                                <h3 className="contactus-h3">Contact Us</h3>
                                <ul>
                                    <li>
                                        <a href="mailto:Reach@shritva.com">
                                            Reach@shritva.com
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="newsletter-form">
                                <h3>Subscribe us </h3>
                                <form id="newsletterForm" onSubmit={handleSubscribe}>
                                    <div className="form-group d-flex gap-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="mail"
                                            placeholder="Enter Your Email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        ></input>
                                        <button type="submit" className="newsletter-btn">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="col-lg-12">
                        <div className="footer-copyright">
                            <div className="footer-copyright-text text-align-center">
                                <p>Copyright © 2025 Shritva - All rights reserved.</p>
                            </div>
                            {/* <div className="footer-privacy-policy">
                                <ul>
                                    <li><a href="/">Privacy policy</a></li>
                                    <li><a href="/">Terms and Conditions</a></li>
                                    <li><a href="/">Help</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer