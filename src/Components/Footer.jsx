import React from 'react'
import logo from "../images/icons/new_logo3.svg"
const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="row">
                    {/* Footer Header */}
                    <div className="col-lg-12">
                        <div className="footer-header">
                            {/* Footer About */}
                            <div className="footer-about d-flex align-items-center">
                                {/* Logo */}
                                <div className="footer-about-text col-lg-6">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div className="about-footer-content col-lg-4">
                                    <p>Powered by Intent Shūnyaivāham</p>
                                </div>
                            </div>

                            {/* Footer Social Links */}
                            <div className="footer-social-links">
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i className="social-icons fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="social-icons fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="social-icons fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="social-icons fa-brands fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                    <div className="col-lg-3">
                        <div className="footer-newsletter-box">
                            <div className="footer-links">
                                <h3 className="contactus-h3">Contact Us</h3>
                                <ul>
                                    <li><a href="/">Our Address:</a></li>
                                    <li>
                                        <a href="/">
                                            Reach me <span style={{ fontStyle: "italic" }}>@</span> The Soul Shift
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="newsletter-form">
                                <h3>Subscribe us </h3>
                                <form id="newsletterForm" action="/" method="POST">
                                    <div className="form-group d-flex gap-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="mail"
                                            placeholder="Enter Your Email"
                                            required
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
                            <div className="footer-copyright-text">
                                <p>Copyright © 2025 Shritva - All rights reserved.</p>
                            </div>
                            <div className="footer-privacy-policy">
                                <ul>
                                    <li><a href="/">Privacy policy</a></li>
                                    <li><a href="/">Term&apos;s &amp; condition</a></li>
                                    <li><a href="/">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer