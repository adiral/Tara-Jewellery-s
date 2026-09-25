import React from "react";

function App() {
    return (
        <div className="website">

            {/* NAVIGATION */}

            <header className="navbar">

                <div className="brand">
                    TARA
                </div>

                <nav>
                    <a href="#collections">Collections</a>
                    <a href="#story">Our Story</a>
                    <a href="#philosophy">Philosophy</a>
                    <a href="#contact">Contact</a>
                </nav>

                <button className="nav-button">
                    Explore
                </button>

            </header>


            {/* HERO */}

            <main>

                <section className="hero">

                    <div className="hero-content">

                        <p className="eyebrow">
                            TARA FINE JEWELLERY
                        </p>

                        <h1>
                            Jewellery that
                            <br />
                            becomes part of
                            <br />
                            <em>your story.</em>
                        </h1>

                        <p className="hero-description">
                            Thoughtfully designed jewellery for
                            personal style, meaningful moments
                            and everyday expression.
                        </p>

                        <div className="hero-actions">

                            <a
                                href="#collections"
                                className="primary-button"
                            >
                                Explore Collection
                            </a>

                            <a
                                href="#story"
                                className="text-button"
                            >
                                Discover TARA →
                            </a>

                        </div>

                    </div>


                    <div className="hero-visual">

                        <div className="jewellery-orb">
                            <div className="orb-ring"></div>

                            <div className="orb-content">
                                T
                            </div>
                        </div>

                        <div className="floating-note">
                            <span>01</span>
                            PERSONAL
                        </div>

                    </div>

                </section>


                {/* BRAND PHILOSOPHY */}

                <section
                    id="philosophy"
                    className="philosophy"
                >

                    <div className="section-heading">

                        <p className="eyebrow">
                            THE TARA PHILOSOPHY
                        </p>

                        <h2>
                            More than an accessory.
                        </h2>

                        <p>
                            Jewellery should feel personal —
                            something that expresses your style,
                            carries your stories, and becomes
                            part of your everyday life.
                        </p>

                    </div>


                    <div className="pillars">

                        <article>
                            <span>01</span>
                            <h3>Personal</h3>
                            <p>
                                Jewellery as a reflection
                                of who you are.
                            </p>
                        </article>

                        <article>
                            <span>02</span>
                            <h3>Wearable</h3>
                            <p>
                                Versatile pieces designed
                                for real life.
                            </p>
                        </article>

                        <article>
                            <span>03</span>
                            <h3>Meaningful</h3>
                            <p>
                                Pieces connected to memories,
                                relationships and milestones.
                            </p>
                        </article>

                        <article>
                            <span>04</span>
                            <h3>Trusted</h3>
                            <p>
                                Quality and experiences
                                you can rely on.
                            </p>
                        </article>

                    </div>

                </section>


                {/* COLLECTIONS */}

                <section
                    id="collections"
                    className="collections"
                >

                    <div className="collection-heading">

                        <div>
                            <p className="eyebrow">
                                CURATED FOR YOU
                            </p>

                            <h2>
                                Find something
                                <br />
                                that feels like you.
                            </h2>
                        </div>

                        <p>
                            Discover pieces designed to be
                            worn, shared, gifted and made
                            your own.
                        </p>

                    </div>


                    <div className="collection-grid">

                        <div className="collection-card card-one">
                            <span>01</span>
                            <h3>Everyday</h3>
                            <p>Quiet pieces for every day.</p>
                        </div>

                        <div className="collection-card card-two">
                            <span>02</span>
                            <h3>Moments</h3>
                            <p>Jewellery for memories worth keeping.</p>
                        </div>

                        <div className="collection-card card-three">
                            <span>03</span>
                            <h3>Expressions</h3>
                            <p>Pieces that speak for themselves.</p>
                        </div>

                    </div>

                </section>


                {/* STORY */}

                <section
                    id="story"
                    className="story"
                >

                    <div className="story-number">
                        T
                    </div>

                    <div className="story-content">

                        <p className="eyebrow">
                            OUR STORY
                        </p>

                        <h2>
                            Style.
                            <br />
                            Self-expression.
                            <br />
                            Meaning.
                        </h2>

                        <p>
                            TARA is a young, design-focused
                            jewellery brand built around the idea
                            that jewellery can become part of
                            someone's identity and story.
                        </p>

                        <p>
                            We believe great pieces should feel
                            exciting, wearable, accessible and
                            meaningful.
                        </p>

                    </div>

                </section>


                {/* CUSTOMER JOURNEY */}

                <section className="journey">

                    <p className="eyebrow">
                        THE TARA EXPERIENCE
                    </p>

                    <h2>
                        Discover → Explore → Choose
                    </h2>

                    <div className="journey-line">
                        <span>Discover</span>
                        <span>Explore</span>
                        <span>Choose</span>
                        <span>Experience</span>
                        <span>Share</span>
                        <span>Return</span>
                    </div>

                </section>


                {/* CONTACT */}

                <section
                    id="contact"
                    className="contact"
                >

                    <p className="eyebrow">
                        STAY CONNECTED
                    </p>

                    <h2>
                        Your story is still
                        <br />
                        being written.
                    </h2>

                    <p>
                        Join the TARA community and discover
                        pieces made to become part of yours.
                    </p>

                    <button className="primary-button">
                        Join TARA
                    </button>

                </section>

            </main>


            {/* FOOTER */}

            <footer>

                <div className="footer-brand">
                    TARA
                    <span>FINE JEWELLERY</span>
                </div>

                <p>
                    STYLE • SELF-EXPRESSION • MEANING • TRUST
                </p>

                <p>
                    © 2026 TARA Fine Jewellery
                </p>

            </footer>

        </div>
    );
}

export default App;
