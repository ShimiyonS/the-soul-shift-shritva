import React from 'react'
import Header from '../Components/Header'
import services1 from "../images/images/MoneySoulFlow.png";
import services2 from "../images/icons/Sacred-Union-Relationship-Healing.svg"
import services3 from "../images/icons/Wisdom-Energy-Realignment.svg"
import services4 from "../images/images/serviceicon4.png"
import services5 from "../images/images/serviceicon5.svg"
import services6 from "../images/images/serviceicon6.svg"
import services7 from "../images/images/serviceicon7.svg"
import services8 from "../images/images/serviceicon8.svg"
// import aboutusimage5 from "../images/images/about-us-img-5.jpg"
import aboutusimage5 from "../images/images/bg-image.png"

import Fotter from '../Components/Fotter';
// import bgImage from "../images/images/images1.png"
// import bgImage2 from "../images/images/images2.png"
import bgImage3 from "../images/images/image3.jpg"
import Shūnyaivāham from "../images/icons/Shūnyaivāham.svg"
import thepurposepathway from "../images/icons/The-Purpose-Pathway.svg"
import thearerhythm from "../images/icons/The-ARE-Rhythm.svg"
import thesoulrootcodex from "../images/icons/The-Soul-Root-Codex.svg"
import bgImage4 from "../images/images/image4.png"
import quoteIcon from "../images/icons/quoteicon.png";
// import image5 from "../images/images/new_image.png";
import image5 from "../images/images/new-image.png";



const Services = () => {
    const services = [
        {
            icon: services1,
            title: "Money & Soul Flow",
            description: "Clear subconscious scarcity codes, karmic blocks, and open to true energetic prosperity."
        },
        {
            icon: services2,
            title: "Sacred Union & Relationship Healing",
            description: "Heal emotional wounding, attract aligned connection, release karmic entanglements in the relationship healing."
        },
        {
            icon: services3,
            title: "Wisdom & Energy Realignment",
            description: "Restore energetic coherence, release stored trauma, and reconnect to your body’s natural intelligence."
        },
        {
            icon: services4,
            title: "Purpose Pathway Activation",
            description: "Clear fears, confusion, and resistance around dharma. Align with your soul’s chosen work."
        },
        {
            icon: services5,
            title: "Soul Contracts & Awakening",
            description: "Navigate initiations, awaken psychic gifts, and reconnect with your higher guidance."
        },
        {
            icon: services6,
            title: "Family & Lineage Healing",
            description: "Release inherited imprints, karmic vows, and ancestral trauma stored in your field."
        },
        {
            icon: services7,
            title: "Heart Clearing & Emotional Integration",
            description: "Transmute suppressed emotions, soothe nervous system patterns, and heal inner fragmentation."
        },
        {
            icon: services8,
            title: "Boundaries, Visibility & Voice",
            description: "Reclaim your space, voice, and truth. Heal the fear of being seen."
        }
    ];

    function ServiceCard({ icon, title, description, delay }) {
        return (
            <div className={`col-lg-3 col-md-6`}>
                <div className={`service-item wow`} data-wow-delay={delay || "0s"}>
                    {/* Service Header */}
                    <div className="service-header">
                        <div className="icon-box">
                            <img src={icon} alt={title} />
                        </div>
                        <div className="service-btn">
                            <a href="/" className="svg-link">
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
                            </a>
                        </div>
                    </div>

                    {/* Service Content */}
                    <div className="service-content">
                        <h3><a href="/">{title}</a></h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header title="Services" />
            <div className="page-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 py-4">
                            <p className="service-hero-text">
                                Every session you experience with Nithya is grounded in The Soul Root
                                Codex - a multidimensional healing system that reveals, clears, and reweaves
                                the energetic roots behind your life patterns. Whether you are navigating
                                emotional pain, relationship patterns, financial blocks, or physical symptoms,
                                this work meets you at the root — and gently invites you back to balance,
                                clarity, and soul alignment.
                            </p>
                            <h2 className="py-4 service-header-color">
                                Explore the core themes below - each is a doorway into your healing journey
                            </h2>
                        </div>

                        {services?.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service?.icon}
                                title={service?.title}
                                description={service?.description}
                            />
                        ))}

                        <div className="col-lg-12 py-4">
                            <p className="service-hero-text">
                                Every session is rooted in The Soul Root Codex, guided by the A.R.E. Life Method
                                (Allow – Respond – Embody), and illuminated by the 7-step Purpose Pathway.
                                This is not surface-level clearing - it is a deep, multidimensional reweaving
                                grounded in the remembrance of who you truly are. Don’t worry about choosing
                                the “right one.” Your session will be intuitively guided and include all that
                                your energy is ready to shift.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="text-center text-white">
                <div className="section-row align-items-center bg-overlay-image" style={{ margin: 0 }}>
                    <img src={aboutusimage5} alt="" style={{ width: "100%" }} />
                    <div className="col-lg-12 overlay-image-container-2">
                        <h2 className="section-text">Your healing begins with a simple yes</h2>
                        <h3 className="section-text text-sizes-services">
                            Choose your focus or come as you are — the energy knows where to go
                        </h3>
                        <div className="book-btn" style={{ marginTop: "3rem" }}>
                            <a href="/contact" className="btn-default">Book a Session</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="what-we-do">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2 pe-lg-5">
                            <div className="what-we-image" style={{ backgroundColor: "blue" }}>
                                <figure>
                                    <img src={bgImage3} alt="" />
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="what-we-content">
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
                                    <a href="/contact" className="btn-default">
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
                        <h2 className="text-anime-style-2 pt-3">
                            To seed The A.R.E. Life or other wisdom streams
                        </h2>
                    </div>

                    <p
                        className="col-lg-5 order-lg-2 pt-3"
                    >
                        Nithya’s work is rooted in timeless spiritual wisdom and
                        multidimensional soul technologies — each designed to awaken the
                        healer within and guide you back to your original wholeness.
                    </p>
                </div>

                <div className="col-lg-12 order-3 pt-2"  >
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
                        <a href="/services" className="btn-default">
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
                            className="text-anime-style-2 section-text"
                            data-cursor="-opaque"
                        >
                            You are not broken. You are becoming.
                        </h2>
                        <h3>
                            The Soul Shift is not about fixing you — it is about remembering what
                            never left.
                        </h3>
                        <h3>If you’re ready to feel the shift, it begins here.</h3>

                        <div className="book-btn" style={{ marginTop: "3rem" }}>
                            <a href="/contact" className="btn-default">
                                Book a Session
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Fotter />
        </>
    )
}

export default Services