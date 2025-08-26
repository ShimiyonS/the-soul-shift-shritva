import React, { useState } from 'react'
import Header from '../Components/Header'
import '../css/contact.css';
// import phoneIcon from "../images/icons/icon-phone.svg";
import mailIcon from "../images/icons/icon-mail.svg";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        service: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "fullName") {
            // Allow only alphabets and spaces
            const regex = /^[a-zA-Z\s]*$/;
            console.log(!regex.test(value))
            if (!regex.test(value)) return; // Block invalid input
        }

        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.service.trim()) {
            newErrors.service = "Please select a service";
        }

        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // stop submit
        }

        const apiUrl = process.env.REACT_APP_API_URL;
        console.log("🌐 API URL:", apiUrl);
        try {
            const res = await axios.post(`${apiUrl}/api/contact`, formData, {
                headers: { "Content-Type": "application/json" },
            });

            console.log(res.data);
            alert(res.data.message);
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                service: "",
                message: ""
            });
            setErrors({});
            document.getElementById("contactForm").reset();
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
                                    <h3>Contact us</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Get in touch with us
                                    </h2>
                                    <p className='text-black'>
                                        We're here to support your journey to better health and
                                        well-being. Reach out today to ask questions, schedule a
                                        consultation.
                                    </p>
                                </div>

                                {/* Contact Info List */}
                                <div className="contact-info-list">
                                    {/* <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src={phoneIcon} alt="phone" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>contact us</h3>
                                            <p className='text-black'>
                                                <a href="tel:761853398">+(1) 761-853-398</a>
                                            </p>
                                        </div>
                                    </div> */}

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src={mailIcon} alt="mail" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>email us</h3>
                                            <p className='text-black'>
                                                <a href="mailto:Reach@shritva.com">Reach@shritva.com</a>
                                            </p>
                                        </div>
                                    </div>

                                    {/* <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src={locationIcon} alt="location" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>location</h3>
                                            <p className='text-black'>123 High Street 123</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <img src={clockIcon} alt="clock" />
                                        </div>
                                        <div className="contact-item-content">
                                            <h3>open</h3>
                                            <p className='text-black'>Mon-Sat(09 - 21:00)</p>
                                        </div>
                                    </div> */}
                                </div>

                                {/* Social Links */}
                                <div className="contact-social-list footer-social-links">
                                    <h3>Follow On Social :</h3>
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
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="col-lg-6">
                            <div className="contact-us-form">
                                {/* Section Title */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Send us a message
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
                                                    placeholder="Full name"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                />
                                                {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="E-mail"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <small className="text-danger">{errors.email}</small>}
                                            </div>

                                            <div className="form-group col-md-12 mb-4">
                                                <select
                                                    name="service"
                                                    className="form-control"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">-- Select Service --</option>
                                                    <option value="Money & Soul Flow">Money & Soul Flow</option>
                                                    <option value="Sacred Union & Relationship Healing">Sacred Union & Relationship Healing</option>
                                                    <option value="Wisdom & Energy Realignment">Wisdom & Energy Realignment</option>
                                                    <option value="Purpose Pathway Activation">Purpose Pathway Activation</option>
                                                    <option value="Soul Contracts & Awakening">Soul Contracts & Awakening</option>
                                                    <option value="Family & Lineage Healing">Family & Lineage Healing</option>
                                                    <option value="Heart Clearing & Emotional Integration">Heart Clearing & Emotional Integration</option>
                                                    <option value="Boundaries, Visibility & Voice">Boundaries, Visibility & Voice</option>
                                                </select>
                                                {errors.service && <small className="text-danger">{errors.service}</small>}
                                            </div>

                                            <div className="form-group col-md-12 mb-5">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="Write Message..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>

                                            <div className="col-md-12">
                                                <button type="submit" className="btn-default">
                                                    Book An Appointment
                                                </button>
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