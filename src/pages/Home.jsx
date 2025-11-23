import { Link } from "react-router-dom";
import HomeIntro from "../components/HomeIntro";
import HomeSkills from "../components/HomeSkills";

const Home = () => {
  return (
    <>
      <main>
        <section className="home-area">
          <div className="container">

            <div className="row g-4">
              {/* home intro starts here */}
              <div className="col-xl-4">
                <HomeIntro />
              </div>
              {/* home intro ends here */}

              <div className="col-xl-4">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body work-experiance-card">
                        <h3 className="card-title mb-md-">Work Experience <Link className="link-btn" to="/experience"> View More
                          <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16699 10H15.8337" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path d="M10.833 15L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path d="M10.833 5L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </Link>
                        </h3>
                        <div className="work-experiance-main">
                          <ul className="work-experiance-slider list-unstyled">

                            <li>
                              <div className="info">
                                <div className="icon">
                                  <img src="assets/img/icons/edtech-icon.png" alt="edtech innovate" loading="lazy"/>
                                </div>
                                <div className="text">
                                  <h4 className="title"> Frontend Developer  </h4>
                                  <h6 className="subtitle"> Edtech Innovate ( Feb 2024 - Present ) </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="icon">
                                  <img src="assets/img/icons/metorsity-icon.png" loading="lazy" alt="mentorsity" />
                                </div>
                                <div className="text">
                                  <h4 className="title"> ReactJs Developer Intern </h4>
                                  <h6 className="subtitle"> Mentorsity ( Sep 2023 ‑ Jan 2024 ) </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="icon">
                                  <img src="assets/img/icons/unifiedmentor-icon.png" loading="lazy" alt="unified mentor" />
                                </div>
                                <div className="text">
                                  <h4 className="title"> Frontend Developer Intern </h4>
                                  <h6 className="subtitle"> Unified Mentor ( May 2023 - Jul 2023 )</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="icon">
                                  <img src="assets/img/icons/internshala-icon.jpg" loading="lazy" alt="internshala" />
                                </div>
                                <div className="text">
                                  <h4 className="title"> Web Developer Trainee </h4>
                                  <h6 className="subtitle"> Internshala (Jul 2021 - Sep 2021) </h6>
                                </div>
                              </div>
                            </li>

                            {/* <li>
                            <div className="date">
                              <p>2024-Present</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/edtech-icon.png" alt="adobe" />
                              </div>
                              <div className="text">
                                <h4 className="title">Edtech Innovate</h4>
                                <h6 className="subtitle">Frontend Developer</h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/metorsity-icon.png" alt="google" />
                              </div>
                              <div className="text">
                                <h4 className="title">Mentorsity</h4>
                                <h6 className="subtitle">React Developer Intern</h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/unifiedmentor-icon.png" alt="meta" />
                              </div>
                              <div className="text">
                                <h4 className="title"> Unified Mentor</h4>
                                <h6 className="subtitle">Frontend Intern</h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/internshala-icon.jpg" alt="adobe" />
                              </div>
                              <div className="text">
                                <h4 className="title">Internshala</h4>
                                <h6 className="subtitle">Web Developer Trainee</h6>
                              </div>
                            </div>
                          </li> */}
                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body work-experiance-card">
                        <h3 className="card-title mb-md-3">Education <Link className="link-btn" to="/about"> View More
                          <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16699 10H15.8337" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path d="M10.833 15L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path d="M10.833 5L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </Link>
                        </h3>
                        <div className="work-experiance-main">
                          <ul className="work-experiance-slider list-unstyled">
                            <li>
                              <div className="info">
                                <div className="icon">
                                  <img src="assets/img/about-us/qu.png" loading="lazy" alt="quantum university" />
                                </div>
                                <div className="text">
                                  <h4 className="title"> Quantum University, Roorkee </h4>
                                  <h6 className="subtitle"> B.Tech (CSE) </h6>
                                  <h6 className="subtitle"> Silver Medalist (Batch 2019-23) </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="icon">
                                  <img src="assets/img/about-us/dav.png" loading="lazy" alt="DAV College" />
                                </div>
                                <div className="text">
                                  <h4 className="title"> DAV College </h4>
                                  <h6 className="subtitle"> 12th (PCM) </h6>
                                  <h6 className="subtitle"> Percentage: 75.6 </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="icon">
                                  <img src="assets/img/about-us/rbt.avif" loading="lazy" alt="rbt" />
                                </div>
                                <div className="text">
                                  <h4 className="title"> RBT Vidyalaya </h4>
                                  <h6 className="subtitle"> 10th (CGPA: 9.2) </h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card card-projects">
                  <div className="card-body">

                    <h3 className="card-title">Recent Projects <Link className="link-btn" to="/projects">All Projects
                      <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16699 10H15.8337" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M10.833 15L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M10.833 5L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </Link>
                    </h3>
                    <div className="projects-main mt-24">
                      <div className="row g-4 parent-container">
                        <div className="col-lg-12">
                          <div className="project-item">
                            <div className="image">
                              <img src="assets/img/projects/quickbuy1.png" alt="project-1" loading="lazy" className="img-fluid w-100" />
                              <div className="info">
                                <span className="category"><Link to="https://ecommerce-quickbuy.netlify.app/"> Open Live Preview </Link></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="project-item">
                            <div className="image">
                              <img src="assets/img/projects/nikeclone.png" alt="project-2" loading="lazy" className="img-fluid w-100" />
                              <div className="info">
                                <span className="category"><Link to="https://nike-clone-nc.netlify.app/"> Open Live Preview </Link></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-area mt-24">
              <div className="row g-4">
                <div className="col-xl-8">
                  <HomeSkills />
                </div>
                <div className="col-xl-4">
                  <div className="card lets-talk-together-card">
                    <div className="card-body">
                      <div className="scrolling-info">
                        <div className="slider-item">
                          <p>
                           Available for Hire 🚀 - Crafting Smooth, Fast & Modern Web Experiences 🎨
                          </p>
                        </div>
                      </div>
                      <h3 className="card-title">Let's👋
                        <span className="d-block">Work Together</span>
                      </h3>
                      <Link className="link-btn" to="/contact"> Let's Talk
                        <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 11.6665V6.6665H12.5" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </Link>
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
            <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" loading="lazy" />
          </div>
          <div className="shape-2 common-shape">
            <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" loading="lazy" />
          </div>
          <div className="threed-shape-1 move-with-cursor" data-value="1">
            <img src="assets/img/bg/object-3d-1.png" alt="object-3d-1" loading="lazy" />
          </div>
          <div className="threed-shape-2 move-with-cursor" data-value="1">
            <img src="assets/img/bg/object-3d-2.png" alt="object-3d-2" loading="lazy" />
          </div>
        </div>
        {/* <!-- background shape area end --> */}
      </main>
    </>
  )
}

export default Home