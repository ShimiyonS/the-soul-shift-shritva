import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import mamImg from "../images/images/mam.png"
import whatWeDoImg from "../images/images/what-we-do.png"
import moneySoulFlow from "../images/images/MoneySoulFlow.png";
import sacredUnion from "../images/icons/Sacred-Union-Relationship-Healing.svg";
import wisdomEnergy from "../images/icons/Wisdom-Energy-Realignment.svg";
import purposePathway from "../images/images/serviceicon4.png";
import bgImage from "../images/images/images1.png"
import bgImage2 from "../images/images/bg-image.png"
import bgImage3 from "../images/images/image3.jpg"
import Shūnyaivāham from "../images/icons/Shūnyaivāham.svg"
import thepurposepathway from "../images/icons/The-Purpose-Pathway.svg"
import thearerhythm from "../images/icons/The-ARE-Rhythm.svg"
import thesoulrootcodex from "../images/icons/The-Soul-Root-Codex.svg"
import bgImage4 from "../images/images/image4.png"
import quoteIcon from "../images/icons/quoteicon.png";
import image5 from "../images/images/new-image.png";
import Fotter from '../Components/Fotter';
import { blogs } from '../Data/Blogs';

import CountUp from "react-countup";
import icon1 from "../images/icons/icon-1.svg"
import icon2 from "../images/icons/icon-2.svg"
import icon3 from "../images/icons/icon-4.svg"
import icon4 from "../images/icons/icon-3.svg"


export const Home = () => {
    const serviceList = [
        {
            id: 1,
            img: moneySoulFlow,
            title: "Money & Soul Flow",
            desc: "Clear subconscious scarcity codes, karmic blocks, and open to true energetic prosperity.",
            delay: "0s",
        },
        {
            id: 2,
            img: sacredUnion,
            title: "Sacred Union & Relationship Healing",
            desc: "Heal emotional wounding, attract aligned connection, release karmic entanglements in the relationship healing.",
            delay: "0.2s",
        },
        {
            id: 3,
            img: wisdomEnergy,
            title: "Wisdom & Energy Realignment",
            desc: "Restore energetic coherence, release stored trauma, and reconnect to your body’s natural intelligence.",
            delay: "0.4s",
        },
        {
            id: 4,
            img: purposePathway,
            title: "Purpose Pathway Activation",
            desc: "Clear fears, confusion, and resistance around dharma. Align with your soul’s chosen work.",
            delay: "0.6s",
        },
    ];

    const counters = [
        {
            icon: icon1,
            number: 15,
            suffix: "+",
            text: "Years Of Experience",
        },
        {
            icon: icon2,
            number: 100,
            suffix: "K+",
            text: "Lives Touched",
        },
        {
            icon: icon3,
            number: 6,
            suffix: "",
            text: "Continents Reached",
        },
        {
            icon: icon4,
            number: 30,
            suffix: "K+",
            text: "Guided Journeys",
        },
    ];
    return (
        <>
            <Header

                subtitle="Powered by Intent Shūnyaivāham"

                title="Transformation From The Core"
                description="Where healing is not becoming more, but remembering who you truly are. Step into a sacred space of stillness, soul remembrance, and deep energetic transformation."
                buttons={[
                    { label: "Begin Your Journey", link: "/journey" },
                    { label: "Meet Nithya", link: "/about" },
                ]}
                isHome={true}
            />
            <section className="new-about-us" id="home-about">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side - Image */}
                        <div className="col-lg-6">
                            <div className="new-about-images">
                                <div className="about-card-design"></div>
                                <div className="new-about-card">
                                    <figure className="new-about-card-image">
                                        <img src={mamImg} alt="Nithya" />
                                    </figure>

                                    <div className="new-about-card-social">
                                        <span>
                                            Follow me
                                            <br />
                                            On Social :
                                        </span>
                                        <div className="new-about-social-icons">
                                            <a href="/">
                                                <i className="about-social-icons fa-brands fa-facebook-f"></i>
                                            </a>
                                            <a href="/">
                                                <i className="about-social-icons fa-brands fa-instagram"></i>
                                            </a>
                                            <a href="/">
                                                <i className="about-social-icons fa-brands fa-linkedin-in"></i>
                                            </a>
                                            <a href="/">
                                                <i className="about-social-icons fa-brands fa-youtube"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Title */}
                                <div className="new-about-image-title">
                                    <h2>Meet Nithya</h2>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="col-lg-6">
                            <div className="new-about-us-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">About</h3>
                                    <h2
                                        className="text-anime-style-2"
                                        data-cursor="-opaque"
                                    >
                                        Nithya’s Soulful Transformation
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Once a driven software engineer, Nithya’s journey took a
                                        sacred turn through loss, awakening, and remembrance.
                                        In 2010, a soul-shifting experience cracked her open.
                                        From the silence of grief emerged the call of her soul.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                                        Today, she stands not as a guru, but as a mirror – holding
                                        space for others to rediscover the wholeness within.
                                        Through The Soul Shift, she offers transformative sessions
                                        and soul mentorship rooted in the essence of
                                        Shūnyaivāham — “The Void is I.” Her work invites you into
                                        the sacred pause, where healing is not something you
                                        achieve, but something you remember.
                                    </p>
                                </div>

                                {/* Button */}
                                <div
                                    className="new-about-content-btn wow fadeInUp"
                                    data-wow-delay="0.8s"
                                >
                                    <Link to="/" className="btn-default">
                                        Are you ready to return to your essence?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us" id="home-about">
                <div className="container" style={{ width: "100%" }}>
                    <div className="row align-items-center">
                        {/* Left Side - Content */}
                        <div className="col-lg-6">
                            <div className="about-us-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">Healing Pathways</h3>
                                    <h2 className="text-anime-style-2" data-cursor="">
                                        Choose Your Focus
                                    </h2>
                                    <p className="wow fadeInUp about-text" data-wow-delay="0.2s">
                                        Every session you experience with Nithya is grounded in The
                                        Soul Root Codex - a multidimensional healing system that
                                        reveals, clears, and reweaves the energetic roots behind your
                                        life patterns.
                                    </p>
                                    <p className="wow fadeInUp about-text" data-wow-delay="0.2s">
                                        Whether you are navigating emotional pain, relationship
                                        patterns, financial blocks, or physical symptoms, this work
                                        meets you at the root — and gently invites you back to
                                        balance, clarity, and soul alignment.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="about-content-btn wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                <Link to="/" className="btn-default">
                                    Explore the core themes below
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="col-lg-6">
                            <div className="about-images">
                                {/* Title */}
                                <div className="about-image-title">
                                    <h2>What we do</h2>
                                </div>

                                {/* Background shape */}
                                <div className="about-bg-image"></div>

                                {/* Main Image */}
                                <div className="about-image">
                                    <figure>
                                        <img src={whatWeDoImg} alt="What We Do" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container'>
                <div className="why-choose-counter-box">
                    {counters.map((item, index) => (
                        <div className="why-choose-counter-item" key={index}>
                            <div className="icon-box blog-counter-icon">
                                <img src={item.icon} alt={item.text} />
                            </div>
                            <div className="why-choose-counter-content">
                                <h3 className='counter-number-icon'>
                                    <CountUp start={0} end={item.number} duration={1} />{item.suffix}
                                </h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="our-services">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Services</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    Explore the core themes below
                                </h2>
                                <h2
                                    className="text-anime-style-2"
                                    data-cursor="-opaque"
                                    data-wow-delay="0.4s"
                                >
                                    Each is a doorway into your healing journey.
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                <Link to="/blogs" className="btn-default">
                                    Explore All Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {serviceList.map((service) => (
                            <div
                                key={service.id}
                                className="col-lg-3 col-md-6"
                            >
                                <div
                                    className="service-item wow fadeInUp"
                                    data-wow-delay={service.delay}
                                >
                                    <div className="service-header">
                                        <div className="icon-box">
                                            <img src={service.img} alt={service.title} />
                                        </div>
                                        <div className="service-btn">
                                            <Link to="/" className="svg-link">
                                                <svg
                                                    className="arrow-icon"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="#ffffff"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M11.6707 3.97604L1.64679 14L0 12.3532L10.0228 2.32926H1.18909V0H14V12.8109H11.6707V3.97604Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="service-content">
                                        <h3>
                                            <Link to="/">{service.title}</Link>
                                        </h3>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <div className="why-choose-us why-choose-us-container">
                <div>
                    <div className="row section-row align-items-center" style={{ margin: 0 }}>
                        <img src={bgImage} alt="bgImage" style={{ padding: 0 }} />
                    </div>

                    <div className="row section-row align-items-center overlay-image">
                        <img src={bgImage2} alt="" />
                        <div className="col-lg-12 overlay-image-container">
                            <h2 className="text-anime-style-2" data-cursor="-opaque">
                                Your healing begins with a simple yes
                            </h2>
                            <h3>
                                Choose your focus or come as you are — the energy knows where to go
                            </h3>
                            <div className="book-btn" style={{ marginTop: "3rem" }}>
                                <a href="/" className="btn-default">
                                    Book a Session
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        {/* Section Footer Text Start */}
                        <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                            <p>
                                <span>Free</span> Let's make something great work together.{" "}
                                <a href="/">Get Free Quote</a>
                            </p>
                        </div>
                        {/* Section Footer Text End */}
                    </div>
                </div>
            </div>

            <div className="what-we-do">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-1 order-2 pe-lg-5">
                            {/* What We Image Start */}
                            <div className="what-we-image" style={{ backgroundColor: "blue" }}>
                                <figure>
                                    <img src={bgImage3} alt="" />
                                </figure>
                            </div>
                            {/* What We Image End */}
                        </div>

                        <div className="col-lg-6 order-lg-2 order-1">
                            {/* What We Content Start */}
                            <div className="what-we-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">The A.R.E. Life Method</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Allow – Respond – Embody
                                    </h2>
                                    <p
                                        className="wow fadeInUp text-color"
                                        data-wow-delay="0.2s"
                                        style={{ color: "black" }}
                                    >
                                        Every session is rooted in The Soul Root Codex, guided by the A.R.E.
                                        Life Method (Allow – Respond – Embody), and illuminated by the
                                        7-step Purpose Pathway.
                                    </p>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay="0.2s"
                                        style={{ color: "black" }}
                                    >
                                        This is not surface-level clearing - it is a deep,
                                        multidimensional reweaving grounded in the remembrance of who you
                                        truly are. Don’t worry about choosing the “right one.” Your session
                                        will be intuitively guided and include all that your energy is
                                        ready to shift.
                                    </p>
                                </div>
                                {/* Section Title End */}

                                {/* What We Button Start */}
                                <div className="what-we-btn wow fadeInUp" data-wow-delay="0.6s">
                                    <a href="/" className="btn-default">
                                        Book a Session
                                    </a>
                                </div>
                                {/* What We Button End */}
                            </div>
                            {/* What We Content End */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="what-we-benefits" id="home-about">
                <div className="tool-techlonogy">
                    <div className="col-lg-7 order-lg-1 order-2">
                        <h3 className="wow fadeInUp">Sacred Tools & Teachings</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                            To seed The A.R.E. Life or other wisdom streams
                        </h2>
                    </div>

                    <p
                        className="col-lg-5 order-lg-2 fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        Nithya’s work is rooted in timeless spiritual wisdom and
                        multidimensional soul technologies — each designed to awaken the
                        healer within and guide you back to your original wholeness.
                    </p>
                </div>

                <div className="col-lg-12 order-3">
                    {/* What We Benefits Box Start */}
                    <div className="what-we-benefits-box">
                        {/* What We Benefits List Start */}
                        <div className="what-we-benefits-list">
                            {/* What We Item Start */}
                            <div className="what-we-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src={Shūnyaivāham} alt="" />
                                </div>
                                <div className="what-we-item-content">
                                    <h3>Shūnyaivāham – </h3>
                                    <h3>The Void as Sacred Mirror</h3>
                                    <p>
                                        A remembrance that healing begins not by becoming more, but
                                        by resting into the truth of what already is.
                                    </p>
                                </div>
                            </div>
                            {/* What We Item End */}

                            {/* What We Item Start */}
                            <div
                                className="what-we-item wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="icon-box">
                                    <img src={thepurposepathway} alt="" />
                                </div>
                                <div className="what-we-item-content">
                                    <h3>The Soul Root Codex –</h3>
                                    <h3>108 Energetic Pattern Categories</h3>
                                    <p>
                                        A precise map for revealing, releasing, and reweaving the
                                        subconscious roots of emotional, ancestral, karmic, and
                                        soul-level imprints.
                                    </p>
                                </div>
                            </div>
                            {/* What We Item End */}

                            {/* What We Item Start */}
                            <div
                                className="what-we-item wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <div className="icon-box">
                                    <img src={thearerhythm} alt="" />
                                </div>
                                <div className="what-we-item-content">
                                    <h3>The A.R.E. Life –</h3>
                                    <h3>Allow. Respond. Embody</h3>
                                    <p>
                                        A transformational rhythm that dissolves resistance,
                                        restores presence, and anchors lasting change in the body
                                        and being.
                                    </p>
                                </div>
                            </div>
                            {/* What We Item End */}

                            {/* What We Item Start */}
                            <div
                                className="what-we-item wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <div className="icon-box">
                                    <img src={thesoulrootcodex} alt="" />
                                </div>
                                <div className="what-we-item-content">
                                    <h3>The Purpose Pathway –</h3>
                                    <h3>7 Steps to Soul-Aligned Integration</h3>
                                    <p>
                                        A clear process to trace any wound, belief, or pattern back
                                        to its original purpose — and transform it into embodied
                                        wisdom.
                                    </p>
                                </div>
                            </div>
                            {/* What We Item End */}
                        </div>
                        {/* What We Benefits List End */}

                        {/* What We Benefits Image Start */}
                        <div className="what-we-benefit-image">
                            <figure className="image-anime">
                                <img src={bgImage4} alt="" />
                            </figure>
                        </div>
                        {/* What We Benefits Image End */}
                    </div>
                    {/* What We Benefits Box End */}

                    <div className="d-flex justify-content-center align-items-center my-5">
                        <a href="/" className="btn-default">
                            Learn More About the Method
                        </a>
                    </div>
                </div>
            </div>

            <section className="client-reflections py-5 border-top">
                <div className="container text-center">
                    <h2 className="section-title">Client Reflections</h2>
                    <p className="section-subtitle mb-5">
                        Reflections from those who have walked this sacred path – glimpses of
                        what The Soul Shift makes possible
                    </p>

                    <div className="row justify-content-center align-items-stretch">
                        {/* Testimonial 1 */}
                        <div className="col-md-5 mb-4">
                            <div className="testimonial-box d-flex p-5 pb-5 shadow-sm w-100 align-items-start">
                                {/* Quote Icon Left */}
                                <div className="quote-icon flex-shrink-0">
                                    <img
                                        src={quoteIcon}
                                        alt="quote icon"
                                        style={{ width: "32px" }}
                                    />
                                </div>

                                {/* Text Content Right */}
                                <div className="testimonial-content ms-3 text-start">
                                    <p className="testimonial-text mb-1">
                                        “It felt like my soul was being seen for the first time.”
                                    </p>
                                    <p className="testimonial-author mb-1">– AH,</p>
                                    <p className="text-muted">Australia</p>
                                    <div className="star-rating d-flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="/C8972B"
                                            >
                                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.167L12 18.896l-7.334 3.868 1.4-8.167L.132 9.21l8.2-1.192z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="col-md-5 mb-4">
                            <div className="testimonial-box d-flex p-5 pb-5 shadow-sm w-100 align-items-start">
                                {/* Quote Icon Left */}
                                <div className="quote-icon flex-shrink-0">
                                    <img
                                        src={quoteIcon}
                                        alt="quote icon"
                                        style={{ width: "32px" }}
                                    />
                                </div>

                                {/* Text Content Right */}
                                <div className="testimonial-content ms-3 text-start">
                                    <p className="testimonial-text mb-1">
                                        “After one session, I cried for the first time in years… but
                                        it felt safe.”
                                    </p>
                                    <p className="testimonial-author mb-1">– V.K.,</p>
                                    <p className="text-muted">India</p>
                                    <div className="star-rating d-flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="/C8972B"
                                            >
                                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.167L12 18.896l-7.334 3.868 1.4-8.167L.132 9.21l8.2-1.192z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center text-white">
                <div className="section-row align-items-center bg-overlay-image" style={{ margin: 0 }}>
                    {/* Background Image */}
                    <img src={image5} alt="Soul Shift" style={{ width: "100%" }} />

                    {/* Overlay Content */}
                    <div className="col-lg-12 overlay-image-container-2">
                        <h2
                            className=" section-text fs-6    fs-lg-1 fs-sm-6"
                        >
                            You are not broken. You are becoming.
                        </h2>
                        <h3 className='pt-3 fs-6 fs-lg-1 fs-sm-6'>
                            The Soul Shift is not about fixing you — it is about remembering what
                            never left.
                        </h3>
                        <h3 className='fs-6  fs-lg-1 fs-sm-6 '>If you’re ready to feel the shift, it begins here.</h3>

                        <div className="book-btn" style={{ marginTop: "3rem" }}>
                            <a href="/" className="btn-default">
                                Book a Session
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="our-blog">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-6">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Latest blog</h3>
                                <h2 className="" data-cursor="">
                                    Explore our latest
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Section Title Content Start */}
                            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                <a href="blogs" className="btn-default">
                                    Explore All Blogs
                                </a>
                            </div>
                            {/* Section Title Content End */}
                        </div>
                    </div>

                    <div className="row">
                        {/* Post Item 1 */}
                        {blogs?.map((blog) => (
                            <div className="col-lg-4 col-md-6">
                                {/* Post Item */}
                                <div className="post-item">
                                    {/* Post Featured Image */}
                                    <div className="post-featured-image">
                                        <a href="/" >
                                            <figure className="image-anime">
                                                <img src={blog?.blogpageimage} alt="Chakra Balancing" />
                                            </figure>
                                        </a>
                                    </div>

                                    {/* Post Item Content */}
                                    <div className="post-item-content">
                                        <h2>
                                            <a href="/">
                                                {blog.title}
                                            </a>
                                        </h2>
                                    </div>

                                    {/* Blog Item Button */}
                                    <div className="blog-item-btn">
                                        <a href={`/blog/${blog.id}`} className="readmore-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <Fotter />
        </>
    )
}
