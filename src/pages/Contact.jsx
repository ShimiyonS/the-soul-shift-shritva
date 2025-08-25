import React, { useState } from 'react'
import Header from '../Components/Header'
import '../css/contact.css';
import phoneIcon from "../images/icons/icon-phone.svg";
import mailIcon from "../images/icons/icon-mail.svg";
import locationIcon from "../images/icons/icon-location.svg";
import clockIcon from "../images/icons/icon-clock.svg";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const res = await axios.post("http://localhost:8000/api/contact", formData, {
                headers: { "Content-Type": "application/json" },
            });

            console.log(res.data);
            alert(res.data.message);
        } catch (error) {
            console.error("❌ Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        }
    };
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
                                            <img src={phoneIcon} alt="phone" />
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
                                            <img src={mailIcon} alt="mail" />
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
                                            <img src={locationIcon} alt="location" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>location</h3>
                                            <p>123 High Street 123</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src={clockIcon} alt="clock" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>open</h3>
                                            <p>Mon-Sat(09 - 21:00)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="contact-social-list footer-social-links">
                                    <h3>Follow On Social :</h3>
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
                                    <form id="contactForm" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    className="form-control"
                                                    id="fullname"
                                                    placeholder="Full name"
                                                    required
                                                    onChange={handleChange}
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
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group col-md-12 mb-4">
                                                <select
                                                    name="service"
                                                    className="form-control"
                                                    id="service"
                                                    required
                                                    onChange={handleChange}
                                                >
                                                    <option value="Money & Soul Flow">Money & Soul Flow</option>
                                                    <option value="Sacred Union & Relationship Healing">Sacred Union & Relationship Healing</option>
                                                    <option value="Wisdom & Energy Realignment">Wisdom & Energy Realignment</option>
                                                    <option value="Purpose Pathway Activation">Purpose Pathway Activation</option>
                                                    <option value="Soul Contracts & Awakening">Soul Contracts & Awakening</option>
                                                    <option value="Family & Lineage Healing">Family & Lineage Healing</option>
                                                    <option value="Heart Clearing & Emotional Integration">Heart Clearing & Emotional Integration</option>
                                                    <option value="Boundaries, Visibility & Voice">Boundaries, Visibility & Voice</option>
                                                </select>
                                            </div>

                                            <div className="form-group col-md-12 mb-5">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    rows="3"
                                                    placeholder="Write Message..."
                                                    onChange={handleChange}
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