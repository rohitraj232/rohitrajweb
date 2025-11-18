import { Link } from "react-router-dom";
import HomeIntro from "../components/HomeIntro";

const experiencesData = [
    {
        id: 1,
        companyImage: "assets/img/icons/edtech.png",
        role: "Frontend Developer",
        duration: "Feb 2024 - Present",
        location: "Noida (Onsite)",
        description: [
            "Developed and maintained responsive websites using React.js, JavaScript, Bootstrap, HTML5, and CSS3, ensuring seamless user experiences across multiple devices.",
            "Optimized performance debugging and reducing LCP and FCP achieving  approximately 26% faster page load times and improved SEO rankings.",
            "Built dynamic, reusable React components to enhance development efficiency and scalability.",
            "Collaborated with UX teams to translate wireframes and prototypes into  functional, user-friendly interfaces.",
            " Integrated RESTful APIs in collaboration with backend developers, ensuring  efficient data flow and smooth application functionality",
        ],
        techs: ["React Js", "Redux", "Jest", "React Testing Library","TanStack Query", "React Formik", "Tailwind CSS", "HTML", "Git", "Optimization", "CSS", "Tailwind CSS", "JavaScript", "Swiper", "Bootstrap", "Web Vitals", "Rest API", "SEO", "Responsive Web Design", "Next Js"]
    },
    {
        id: 2,
        companyImage: "assets/img/icons/mentorsity.png",
        role: "React Developer Intern",
        duration: "Sep 2023 - Jan 2024",
        location: "New Delhi (Remote)",
        description: [
            "Acquired proficiency in React Js, enhancing the interactivity and efficiency of web applications. Designed and developed page layouts, custom navigation, animation buttons.",
            "Designed and implemented modern UI layouts using Tailwind CSS, enhancing visual appeal and user experience.",
            "Integrated React-Fast-Marquee and Swiper libraries to create seamless sliders and marquees for interactive content.",
            "Optimized website performance by compressing images and minifying JavaScript and CSS files, reducing load time and improving Google PageSpeed Insights score by 20 points."
        ],
        techs: ["React Js", "Redux", "Tailwind CSS", "HTML", "Git", "Optimization", "CSS", "Tailwind CSS", "JavaScript", "Swiper", "Bootstrap"]
    },
    {
        id: 3,
        companyImage: "assets/img/icons/unifiedmentor.avif",
        role: "Frontend Developer Intern",
        duration: "May 2023 - Jul 2023",
        location: "Remote",
        description: [
            "Developed an interactive layout, using HTML, CSS and JavaScript to generate an improved user experience and ensure high-quality design and cross-browser compatibility.",
            "Contributed to UI improvements by implementing interactive elements and animations with JavaScript and CSS.",
            "Utilized version control systems, such as Git, to track changes and collaborate effectively with team members."
        ],
        techs: ["React", "Web Development", "HTML", "CSS", "Bootstrap", "JavaScript", "Git", "Tailwind CSS"]
    },
    {
        id: 3,
        companyImage: "assets/img/icons/internshala.png",
        role: "Web Developer Trainee",
        duration: "Jul 2021 - Sep 2021",
        location: "Remote",
        description: [
            "Acquired hands-on experience in front-end technologies like HTML, CSS, Bootstrap, Javascript and React JS.",
            "Acquired proficiency in crafting responsive web applications, ensuring seamless user experiences across devices.",
        ],
        techs: ["React", "Web Development", "DBMS", "HTML", "CSS", "Bootstrap", "JavaScript"]
    },
];

const Experience = () => {
    return (
        <>
            {/* main area part start */}
            <main>
                <section className="content-box-area mt-4">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4">
                                <HomeIntro />
                            </div>

                            <div className="col-xl-8">
                                {/* map only the card(s) */}
                                {experiencesData.map((exp) => (
                                    <div className="card content-box-card mb-4" key={exp.id}>
                                        <div className="card-body portfolio-card article-details-card">
                                            <div className="article-details-area">
                                                <div className="main-image mb-4">
                                                    <img
                                                        src={exp.companyImage}
                                                        alt={exp.role}
                                                        className="img-fluid"
                                                        width="200"
                                                        height="200"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <h2 className="fs-5 mb-0 fw-bold">{exp.role}</h2>

                                                <ul className="list-unstyled article-tags mt-1">
                                                    <li>{exp.duration}</li>
                                                    <li>{exp.location}</li>
                                                </ul>

                                                <div className="article-details-text mt-4">
                                                    <ul className="list-unstyled listed-info">
                                                        {exp.description.map((desc, i) => (
                                                            <li key={i}>{desc}</li>
                                                        ))}
                                                    </ul>

                                                    <div className="tags-and-share">
                                                        <div className="tags">
                                                            <h3 className="title">Techs:</h3>
                                                            <ul className="list-unstyled">
                                                                {exp.techs.map((tech, idx) => (
                                                                    <li key={idx}>
                                                                        <Link href="#">{tech}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* end map */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* background shape area start */}
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
                {/* background shape area end */}
            </main>
            {/* main area part end */}
        </>
    );
};

export default Experience;
