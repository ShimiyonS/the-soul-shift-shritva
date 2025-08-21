import React from 'react'
import Header from '../Components/Header'
import '../css/contact.css';
const Contact = () => {
    return (
        <>
            <Header title='Let us connect' isHome={false} />
            <div className="page-contact-us">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Contact Info */}
                        <div className="col-lg-6">
                            <div className="contact-us-content">
                                {/* Section Title */}
                                <div className="section-title">
                                    <h3>contact us</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Get in touch <span>with us</span>
                                    </h2>
                                    <p>
                                        We're here to support your journey to better health and
                                        well-being. Reach out today to ask questions, schedule a
                                        consultation.
                                    </p>
                                </div>

                                {/* Contact Info List */}
                                <div className="contact-info-list">
                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src="images/icon-phone.svg" alt="phone" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>contact us</h3>
                                            <p>
                                                <a href="tel:761853398">+(1) 761-853-398</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src="images/icon-mail.svg" alt="mail" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>email us</h3>
                                            <p>
                                                <a href="mailto:info@domain.com">info@domain.com</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src="images/icon-location.svg" alt="location" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>location</h3>
                                            <p>123 High Street 123</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src="images/icon-clock.svg" alt="clock" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>open</h3>
                                            <p>Mon-Sat(09 - 21:00)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="contact-social-list">
                                    <h3>Follow On Social :</h3>
                                    <ul>
                                        <li>
                                            <a href="/" className="social-icon">
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="social-icon">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="social-icon">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="social-icon">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="col-lg-6">
                            <div className="contact-us-form">
                                {/* Section Title */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Send us a <span>message</span>
                                    </h2>
                                </div>

                                {/* Contact Form */}
                                <div className="contact-form">
                                    <form id="contactForm" action="#" method="POST">
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    name="fname"
                                                    className="form-control"
                                                    id="fname"
                                                    placeholder="First name"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    className="form-control"
                                                    id="lname"
                                                    placeholder="Last name"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="E-mail"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Phone"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col-md-12 mb-5">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    rows="3"
                                                    placeholder="Write Message..."
                                                ></textarea>
                                            </div>

                                            <div className="col-md-12">
                                                <button type="submit" className="btn-default">
                                                    book An appointment
                                                </button>
                                                <div id="msgSubmit" className="h3 hidden"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* End Right Column */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact