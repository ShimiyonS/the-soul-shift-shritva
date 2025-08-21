import React from "react";
import logo from "../images/icons/Soul_shift_final_logo1.png"

const Header = ({ title, subtitle, description, buttons = [], isHome = false }) => {
    return (
        <>
            {/* Header Start */}
            <header className="main-header">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            {/* Logo Start */}
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="Logo" width="30%" />
                                <h1>The Soul Shift</h1>
                            </a>
                            {/* Logo End */}

                            {/* Main Menu Start */}
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
                                            <a className="nav-link" href="/blogs">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact">Contact Us</a>
                                        </li>
                                        <li className="nav-item highlighted-menu">
                                            <a className="nav-link" href="/">Book Appointment</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Header Contact Btn Start */}
                                <div className="header-contact-btn">
                                    <a href="/" className="btn-default">Get Started</a>
                                </div>
                                {/* Header Contact Btn End */}
                            </div>
                            {/* Main Menu End */}
                            <div className="navbar-toggle"></div>
                        </div>
                    </nav>
                    <div className="responsive-menu"></div>
                </div>
            </header>
            {/* Header End */}

            {/* Hero Section Start */}
            <div className="bg-image-div">
                <div className={` parallaxie ${isHome ? "hero" : "inner-hero"}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                {/* Hero Content Start */}
                                <div className="hero-content">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h3 className="">{subtitle}</h3>
                                        <h1
                                            className=""
                                        >
                                            {title}
                                        </h1>
                                        <p className="">
                                            {description}
                                        </p>
                                    </div>
                                    {/* Section Title End */}

                                    {/* Hero Content Body Start */}
                                    {/* <div className="hero-body wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="hero-btn">
                                            {console.log(buttons)}
                                            <Link to={buttons[0]?.link} className="btn-default">
                                                {buttons[0]?.label}
                                            </Link>
                                        </div>
                                        <div className="hero-btn">
                                            <Link to={buttons[1]?.link} className="btn-default">
                                                {buttons[1]?.label}
                                            </Link>
                                        </div>
                                    </div> */}
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
                                    {/* Hero Content Body End */}
                                </div>
                                {/* Hero Content End */}
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
