import HomeIntro from '../components/HomeIntro'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main>

      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-4">
              <HomeIntro />
            </div>

            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body portfolio-card contact-card">
                  <div className="top-info">
                    <div className="text">
                      <h1 className="main-title">Let's 👋 <span>Work</span> Together</h1>
                      <p>I'm here to help if you're looking for a Frontend Developer to bring your ideas to life or take your business to the next level.</p>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="cnt-wrapper border border-1 rounded-3 shadow-sm p-3">
                        <Link to="mailto:rohitsp927@gmail.com">
                          <div className="cnt-img">
                            <i class="fas fa-envelope fs-5"></i>
                            <p className='mb-0'> rohitsp927@gmail.com </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="cnt-wrapper border border-1 rounded-3 shadow-sm p-3">
                        <Link to="tel:8709951763 ">
                          <div className="cnt-img">
                            <i class="fas fa-phone-alt fs-5"></i>
                            <p className='mb-0'> +91 8709951763 </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="cnt-wrapper border border-1 rounded-3 shadow-sm p-3">
                        <Link to="https://www.linkedin.com/in/rohitraj27/">
                          <div className="cnt-img">
                            <i class="fab fa-linkedin fs-5"></i>
                            <p className='mb-0'> LinkedIn </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>


                  <div className="contact-area">
                    <div className="leave-comments-area">
                      <div className="comments-box">
                        <form id="contact-form" action="#" method="POST">
                          <div className="row gx-3">
                            <div className="col-md-6">
                              <div className="mb-4">
                                <label className="form-label">Name</label>
                                <input name="name" required type="text" className="form-control shadow-none" placeholder="Enter your name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-4">
                                <label className="form-label">Email</label>
                                <input name="email" required type="email" className="form-control shadow-none" placeholder="Enter your email" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-4">
                                <label className="form-label">Subject</label>
                                <input name="subject" required type="text" className="form-control shadow-none" placeholder="Subject" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-4">
                                <label className="form-label">Mobile No.</label>
                                <input name="subject" required type="tel" className="form-control shadow-none" placeholder="+91" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="mb-4">
                                <label className="form-label">Comment</label>
                                <textarea name="message" className="form-control shadow-none" rows="4"
                                  placeholder="Type details..."></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button className="submit-btn" type="submit">
                                Send Message
                                <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.5 11.6665V6.6665H12.5" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </form>
                        <p className="ajax-response mb-0"></p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  )
}

export default Contact