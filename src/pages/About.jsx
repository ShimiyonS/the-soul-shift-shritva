import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import aboutImage from "../images/images/about-us-img-1.jpg";
import bgimage1 from "../images/images/about-us-img-2.jpg"
import bgimage2 from "../images/images/about-us-img-3.jpg"
import bgImage4 from "../images/images/about-us-img-4.jpg"
import bgImage5 from "../images/images/about-us-img-5.jpg";

const About = () => {
    return (
        <>
            <Header
                title="Meet Nithya"
            />
            <div className="our-approach about-us-container">
                <div className="container">
                    <div className="row">
                        {/* Title */}
                        <div className="col-lg-12">
                            <h1 className="title-about-nithya">About Nithya</h1>
                            <h3 className="about-us-des">
                                Founder of The Soul Shift | Witness. Mirror. Guide. Frequency-Holder.
                            </h3>
                        </div>

                        {/* Text */}
                        <div className="col-lg-8 about-us-content-text">
                            <p>In her own words…</p>
                            <p>I have always felt life a little more deeply than everyone around me.</p>
                            <p>
                                As a child, I was intuitive - sensitive in ways I could never fully
                                understand. I experienced things others didn’t name and carried a quiet
                                knowing that was often too much for the world around me. Over time, that
                                part of me shut down. It didn’t feel safe to be that open. Reading
                                through my moral science textbook at age 5, I remember wanting to become a
                                brain surgeon - not because I wanted recognition, but because I believed I
                                could help people think differently. Even back then, I tried to make the
                                inner world more livable, more gentle.
                            </p>
                            <p>
                                But I also grew up feeling the weight of not being fully welcomed for who I
                                was. There were moments when I felt rejected simply for being born a girl.
                                So, I worked hard to feel and be seen as valuable, capable, and worthy in
                                the ways the world seemed to recognize.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="col-lg-4">
                            <div className="our-approach-image">
                                <figure className="image-anime about-us-img-1">
                                    <img src={aboutImage} alt="About Nithya" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="what-we-do">
                <div className="container what-we-do-content">
                    <p>
                        But I also grew up feeling the weight of not being fully welcomed for
                        who I was. There were moments when I felt rejected simply for being
                        born a girl. So, I worked hard to feel and be seen as valuable,
                        capable, and worthy in the ways the world seemed to recognize.
                    </p>
                    <p>
                        I became a software engineer when I was 21. I got married at 22 to a
                        wonderful man. I became a mother for the first time at 24 to a
                        beautiful girl who changed me in quiet, irreversible ways. Life looked
                        full. Everything felt steady and picture perfect, yet something
                        within, I felt a void - a silent ache that I could not understand. I
                        felt something was missing.
                    </p>
                    <p>
                        In 2010, I lost my second pregnancy. I was eight weeks in. That grief
                        didn’t shatter me but it opened something I had long buried. It
                        brought me to a threshold I could no longer ignore.
                    </p>
                    <p>
                        Then, in 2013, I gave birth to another beautiful daughter, and from
                        that moment, the journey deepened. Not outwardly, but within. Her
                        arrival stirred something vast and ancient in me. My questions became
                        louder, yet quieter. My listening, deeper. My soul, hungrier for
                        truth.
                    </p>
                    <p>
                        Still, I didn’t rush into facilitating healing work. I spent five
                        years turning inward, unlearning, feeling deeply, and finding my own
                        rhythm again.
                    </p>
                </div>
            </div>

            <div className="why-choose-us why-choose-us-container" style={{ padding: "0px" }}>
                <div>
                    <div className="row section-row align-items-center overlay-image">
                        <img src={bgimage1} alt="About Us" />
                        <div className="col-lg-12 overlay-image-container">
                            <div className="col-lg-12 overlay-image-container px-8 overlay-image-text">
                                <p>
                                    In 2018, I offered my first healing space: <strong>BEing with Gaia</strong>.
                                    It was never about teaching or performing. It was about creating room for
                                    others to be with their own truth - without pressure, without masks.
                                </p>
                                <p>
                                    Since then, my work has continued to evolve - not through strategy, but
                                    through presence. I have never been interested in offering quick answers or
                                    surface-level support. I hold space for what is real, what’s unfolding,
                                    and what is ready - even if it is still unspoken.
                                </p>
                                <p>
                                    Over the years, I have also trained in various healing systems that deepened
                                    and refined my intuitive work - including <em>Emotion Code, Body Code,
                                        Belief Code, Redikall Consciousness (Level 5), and the Akashic Records</em>,
                                    to name a few. These tools have shaped how I listen, witness, and hold space,
                                    but they do not define the work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="who-we-are" style={{ padding: "0px" }}>
                <div className="container">
                    <div className="row">
                        {/* Left Column - Image */}
                        <div className="col-lg-6">
                            <div className="who-we-are" style={{ padding: "0px" }}>
                                <figure>
                                    <img src={bgimage2} alt="Who We Are" />
                                </figure>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="col-lg-6">
                            <div className="who-we-are-content">
                                <div className="section-title text-who-we-are">
                                    <h3 className="wow">What This Work Has Become</h3>
                                    <p>
                                        What I offer today did not arrive all at once. It came slowly,
                                        through lived experience, deep listening, and grace.
                                    </p>
                                    <p>Some of the forms this work has taken include:</p>

                                    <h2 className="pt-4">Shūnyaivāham</h2>
                                    <p className="pt-3">
                                        A living transmission and the spiritual foundation of my work.
                                        Meaning <em>“The Void is I,”</em> or <em>“I am the Void,”</em>,
                                        it reflects the formless space within us that holds all truths
                                        without distortion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="soul-root-codex" style={{ padding: "0px" }}>
                <div className="container text-who-we-are pt-4">
                    {/* First Text Block */}
                    <div className="col-lg-12">
                        <p>
                            Shūnyaivāham is not a concept, but a way of being, where healing
                            arises not from doing, but from resting into what already is. It
                            invites you to meet yourself in silence, in presence, and in the
                            sacred mirror of the void.
                        </p>
                    </div>

                    {/* Soul Root Codex Section */}
                    <div className="col-lg-12">
                        <h4>The Soul Root Codex</h4>
                        <p className="pt-4">
                            A comprehensive 7-step healing system, rooted in the principles of
                            The Purpose Pathway and structured within the 3-phase rhythm of The
                            A.R.E. Method. It maps 108 energetic and emotional patterns, helping
                            you recognize how you have adapted and protected yourself through
                            life, and guiding you to release those imprints so you can return to
                            wholeness with clarity, compassion, and conscious choice.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Text Section */}
                    <div className="col-lg-8 arelif-container">
                        <h1 className="fw-bold">The ARE Life</h1>
                        <h2 className="text-primary fw-semibold pt-4">Allow. Respond. Embody</h2>
                        <p className="pt-4">
                            It's a way of living — a rhythm — rooted in presence, response, and
                            embodiment. Through Allow. Respond. Embody, you begin meeting life
                            as it is, choosing from awareness, and living in alignment with your
                            inner truth. As the core framework of The Soul Root Codex, this
                            3-phase rhythm supports deep healing by guiding you to meet what
                            arises with presence, choose from awareness, and embody a more
                            authentic way of being and living.
                        </p>

                        <h2 className="fw-bold mt-4">The Purpose Pathway</h2>
                        <p className="pt-4">
                            It's a way of living — a rhythm — rooted in presence, response, and
                            embodiment. Through Allow. Respond. Embody, you begin meeting life
                            as it is, choosing from awareness, and living in alignment with your
                            inner truth. As the core framework of The Soul Root Codex, this
                            3-phase rhythm supports deep healing by guiding you to meet what
                            arises with presence, choose from awareness, and embody a more
                            authentic way of being and living.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-4 mt-lg-0">
                        <img
                            src={bgImage4}
                            alt="Chakra Body"
                            className="img-fluid rounded ms-lg-5"
                        />
                    </div>
                </div>
            </div>

            <section className="text-center text-white position-relative">
                {/* Background Image */}
                <div className="section-row bg-overlay-image position-relative m-0">
                    <img
                        src={bgImage5}
                        alt="Work With Me Background"
                        className="w-100"
                    />

                    {/* Overlay Content */}
                    <div className="col-lg-12 overlay-image-container-2 position-absolute top-50 start-50 translate-middle text-center">
                        <h2 className="section-text">
                            If something in you feels seen here, <br />
                            we have already met.
                        </h2>

                        <h3 className="section-text work-with-me mt-3">Work With Me</h3>

                        <div className="book-btn mt-4">
                            <a href="/" className="btn-default">
                                Book a Session
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About