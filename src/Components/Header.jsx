import React, { useState } from "react";
import logo from "../images/icons/new_logo3.svg";


const Header = ({ title, subtitle, description, buttons = [], isHome = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <>
            {/* Header Start */}
            <header className="main-header">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="Logo" width="100%" />
                            </a>

                            <div className="collapse navbar-collapse main-menu">
                                <div className="nav-menu-wrapper">
                                    <ul className="navbar-nav mr-auto" id="menu">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/about">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/services">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/blogs">Blogs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact">Contact Us</a>
                                        </li>
                                        <li className="nav-item highlighted-menu">
                                            <a className="nav-link" href="/">Book Appointment</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-contact-btn">
                                    <a href="/contact" className="btn-default">Get Started</a>
                                </div>
                            </div>
                            {/* Hamburger */}
                            <button
                                className={`navbar-toggle ${isOpen ? "open" : ""}`}
                                onClick={toggleMenu}
                                aria-expanded={isOpen}
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                    </nav>
                    <div className={`responsive-menu ${isOpen ? "show" : ""}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="/blogs">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>

                        <div className="header-contact-btn">
                            <a href="/contact" className="btn-default">Get Started</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-image-div">
                <div className={` parallaxie ${isHome ? "hero" : "inner-hero"}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                {/* Hero Content Start */}
                                <div className="hero-content">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h1 className="">{title}</h1>
                                        <h3 className="">{subtitle}</h3>
                                        <p className="">
                                            {description}
                                        </p>
                                    </div>
                                    {buttons.length > 0 && (
                                        <div className="hero-body wow fadeInUp" data-wow-delay="0.4s">
                                            {buttons.map((btn, i) => (
                                                <div key={i} className="hero-btn">
                                                    <a href={btn.link} className="btn-default">
                                                        {btn.label}
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}
        </>
    );
};

export default Header;
