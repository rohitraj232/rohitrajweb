import { Link } from "react-router-dom";
import HomeIntro from '../components/HomeIntro';
import AllSkills from "../components/AllSkills";
import AwardsCertifications from "../components/AwardsCertifications";

const About = () => {
    return (
        <>
            {/* <!-- main area part start --> */}
            <main>

                <section className="content-box-area mt-4">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4">
                                <HomeIntro />
                            </div>

                            <div className="col-xl-8">
                                <div className="card content-box-card">
                                    <div className="card-body">
                                        <div className="top-info d-block">
                                            <div className="text">
                                                <h1 className="main-title">Hi, This Is <span>Rohit Raj</span> 👋</h1>
                                                <p>A passionate <b>Frontend Developer</b> 🖥️ with <b>over 1.8 years </b> of experience in building responsive and optimized web applications. </p>

                                                <p className='mt-4'>
                                                    My name is Rohit Raj, and I am from Siwan, Bihar, India. I have completed my Bachelor's Degree in Computer Science Engineering from Quantum University, Roorkee. Currently, I am working as a Frontend Developer at EdTech Innovate Pvt. Ltd.. Previously, I worked as a React Js Developer Intern at Mentorsity. Additionally, I have completed a web development training course from Internshala.
                                                </p>
                                            </div>

                                            {/* <div className="available-btn">
                                                <span><i className="fas fa-circle"></i> Available For Hire</span>
                                            </div> */}
                                        </div>


                                        {/* <div className="counter-area">
                                            <div className="counter">
                                                <div className="counter-item">
                                                    <h3 className="number">40+</h3>
                                                    <p className="subtitle">Year of Experience</p>
                                                </div>
                                                <div className="counter-item">
                                                    <h3 className="number">86+</h3>
                                                    <p className="subtitle">Project Completed
                                                    </p>
                                                </div>
                                                <div className="counter-item">
                                                    <h3 className="number">72+</h3>
                                                    <p className="subtitle">Happy Client
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="circle-area">
                                                <div className="circle-text">
                                                    <img className="circle-image" src="assets/img/about-us/circle-text.svg" alt="circle-text" />
                                                    <img className="circle-image circle-image-light d-none"
                                                        src="assets/img/about-us/circle-text-light.svg" alt="circle-text" />
                                                    <span className="arrow-down">
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M20 5V35" stroke="white" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M15 30L20 35L25 30" stroke="white" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}


                                        <div className="working-with-area">
                                            <h2 className="main-common-title">Technical Skills ✨</h2>
                                            <AllSkills />
                                        </div>


                                        {/* <div className="client-feedback">
                                            <h2 className="main-common-title">Trusted By 1200+ Clients
                                            </h2>
                                            <div className="row client-feedback-slider">
                                                <div className="col-lg-6">
                                                    <div className="feedback-item">
                                                        <div className="feedback-top-info">
                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                            <div className="website">
                                                                <Link to="#">Framer.com
                                                                    <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <p>
                                                                "We've been using BentoFolio for over a year now, and I must say, it's been a game-changer
                                                                for us. The user interface is intuitive and the feature.
                                                            </p>
                                                        </div>
                                                        <div className="designation">
                                                            <p><span>Oliver Clain</span> - Product Designer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="feedback-item">
                                                        <div className="feedback-top-info">
                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                            <div className="website">
                                                                <Link to="#">Framer.com
                                                                    <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <p>
                                                                "We've been using BentoFolio for over a year now, and I must say, it's been a game-changer
                                                                for us. The user interface is intuitive and the feature.
                                                            </p>
                                                        </div>
                                                        <div className="designation">
                                                            <p><span>Oliver Clain</span> - Product Designer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="feedback-item">
                                                        <div className="feedback-top-info">
                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                            <div className="website">
                                                                <Link to="#">Framer.com
                                                                    <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <p>
                                                                "We've been using BentoFolio for over a year now, and I must say, it's been a game-changer
                                                                for us. The user interface is intuitive and the feature.
                                                            </p>
                                                        </div>
                                                        <div className="designation">
                                                            <p><span>Oliver Clain</span> - Product Designer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* Awards and Certifications Starts */}
                                        <AwardsCertifications />
                                        {/* Awards and Certifications Ends */}



                                        {/* <div className="article-publications">
                                            <h2 className="main-common-title">Article and Publications</h2>
                                            <div className="article-publications-main">
                                                <div className="row article-publications-slider">
                                                    <div className="col-lg-6">
                                                        <div className="article-publications-item">
                                                            <div className="image">
                                                                <Link to="article.html" className="d-block w-100">
                                                                    <img src="assets/img/blog/blog-img-1.jpg" alt="blog-img-1" className="img-fluid w-100" />
                                                                </Link>
                                                                <Link to="article.html" className="tags">Development</Link>
                                                            </div>
                                                            <div className="text">
                                                                <Link to="article.html" className="title">Want To Upgrade Your Brain? Stop Doing These 7
                                                                    Things</Link>
                                                                <ul className="list-unstyled">
                                                                    <li>15 min read</li>
                                                                    <li>Nov 6, 2023</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="article-publications-item">
                                                            <div className="image">
                                                                <Link to="article.html" className="d-block w-100">
                                                                    <img src="assets/img/blog/blog-img-2.jpg" alt="blog-img-2" className="img-fluid w-100" />
                                                                </Link>
                                                                <Link to="article.html" className="tags">Development</Link>
                                                            </div>
                                                            <div className="text">
                                                                <Link to="article.html" className="title">Want To Upgrade Your Brain? Stop Doing These 7
                                                                    Things</Link>
                                                                <ul className="list-unstyled">
                                                                    <li>15 min read</li>
                                                                    <li>Nov 6, 2023</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="article-publications-item">
                                                            <div className="image">
                                                                <Link to="article.html" className="d-block w-100">
                                                                    <img src="assets/img/blog/blog-img-3.jpg" alt="blog-img-3" className="img-fluid w-100" />
                                                                </Link>
                                                                <Link to="article.html" className="tags">Development</Link>
                                                            </div>
                                                            <div className="text">
                                                                <Link to="article.html" className="title">Want To Upgrade Your Brain? Stop Doing These 7
                                                                    Things</Link>
                                                                <ul className="list-unstyled">
                                                                    <li>15 min read</li>
                                                                    <li>Nov 6, 2023</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}


                                        <div className="work-together-slider">
                                            <div className="slider-main d-flex gap-4 align-items-center">
                                                <div className="slider-item">
                                                    <Link to="/contact">Available for Hire 🚀 - Crafting Smooth, Fast & Modern Web Experiences 🎨</Link>
                                                </div>
                                                <div className="slider-item">
                                                    <Link to="/contact">Available for Hire 🚀 - Crafting Smooth, Fast & Modern Web Experiences 🎨</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- background shape area start --> */}
                <div className="background-shapes">
                    <div className="shape-1 common-shape">
                        <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
                    </div>
                    <div className="shape-2 common-shape">
                        <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
                    </div>
                    <div className="threed-shape-1 move-with-cursor" data-value="1">
                        <img src="assets/img/bg/object-3d-1.png" alt="object-3d-1" />
                    </div>
                    <div className="threed-shape-2 move-with-cursor" data-value="1">
                        <img src="assets/img/bg/object-3d-2.png" alt="object-3d-2" />
                    </div>
                </div>
                {/* <!-- background shape area end --> */}
            </main>
            {/* <!-- main area part end --> */}
        </>
    )
}

export default About;