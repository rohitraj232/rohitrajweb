import { Link } from "react-router-dom";
import HomeIntro from '../components/HomeIntro'

const Projects = () => {

    const projectsData = [
        {
            id: 1,
            image: "/assets/img/projects/quickbuy1.png",
            projectTitle: "QuickBuy (Ecommerce App)",
            liveDemoLink: "https://ecommerce-quickbuy.netlify.app/",
            githubLink: "https://github.com/rohitraj232/QuickBuy_Ecommerce-App",
        },
        {
            id: 2,
            image: "/assets/img/projects/nikeclone.png",
            projectTitle: "Nike Clone",
            liveDemoLink: "https://nike-clone-nc.netlify.app/",
            githubLink: "https://github.com/rohitraj232/Nike_Clone",
        },
    ]

    return (
        <>
            <main>

                <section className="content-box-area mt-4">
                    <div className="container">
                        <div className="row g-4">

                            <div className="col-xl-4">
                                <HomeIntro />
                            </div>

                            <div className="col-xl-8">
                                <div className="card content-box-card">
                                    <div className="card-body portfolio-card">
                                        <div className="top-info">
                                            <div className="text">
                                                <h1 className="main-title"> Check Out My Latest <span>Projects</span> </h1>
                                            </div>
                                        </div>
                                        <div className="portfolio-area">
                                            <div className="row g-4 parent-container">
                                                {projectsData.map(project => (
                                                    <div key={project.id} className="col-lg-12">
                                                        <div className="portfolio-item">
                                                            <div className="image">
                                                                <img
                                                                    src={project.image}
                                                                    alt={project.projectTitle}
                                                                    className="img-fluid w-100"
                                                                    loading='lazy'
                                                                />
                                                            </div>
                                                            <div className="text">
                                                                <div className="info">
                                                                    <Link to={project.liveDemoLink} target="_blank" className="title">
                                                                        {project.projectTitle}
                                                                    </Link>
                                                                </div>

                                                                <div className="visite-btn">
                                                                    <Link
                                                                        to={project.liveDemoLink} target="_blank"
                                                                        className='me-3 fs-6 fw-bold border border-1 rounded-5 p-2 p-lg-3 bg-light mb-2'>
                                                                        Live Demo
                                                                        <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                            <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </Link>
                                                                    <Link
                                                                        to={project.githubLink} target="_blank"
                                                                        className='me-3 fs-6 fw-bold border border-1 rounded-5 p-2 p-lg-3 bg-light mb-2'>
                                                                        Github
                                                                        <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                            <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="work-together-slider">
                                            <div className="slider-main d-flex gap-4 align-items-center">
                                                <div className="slider-item">
                                                    <Link href="#">Available for Hire 🚀 - Crafting Smooth, Fast & Modern Web Experiences 🎨</Link>
                                                </div>
                                                <div className="slider-item">
                                                    <Link href="#">Available for Hire 🚀 - Crafting Smooth, Fast & Modern Web Experiences 🎨</Link>
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
        </>
    )
}

export default Projects;