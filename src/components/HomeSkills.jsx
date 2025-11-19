import { Link } from "react-router-dom";

const HomeSkills = () => {

    const skillsData = [
        { id: 1, image: "assets/img/icons/html-5.svg", title: "HTML" },
        { id: 2, image: "assets/img/icons/css3.svg", title: "CSS" },
        { id: 3, image: "assets/img/icons/javascript.svg", title: "JavaScript" },
        { id: 4, image: "assets/img/icons/react.svg", title: "React Js" },
        { id: 5, image: "assets/img/icons/redux.svg", title: "Redux" },
        { id: 6, image: "assets/img/icons/jest.svg", title: "Jest" },
        { id: 7, image: "assets/img/icons/tanstack-query.png", title: "TanStack Query" },
        { id: 8, image: "assets/img/icons/typescript.svg", title: "Typescript" },
        { id: 9, image: "assets/img/icons/java.svg", title: "Java" },
        { id: 10, image: "assets/img/icons/bootstrap.png", title: "Bootstrap" },
        { id: 11, image: "assets/img/icons/firebase.svg", title: "Firebase" },
        { id: 12, image: "assets/img/icons/nextjs.svg", title: "Next Js" }
    ];

    return (
        <div className="card expertise-card">
            <div className="card-body">
                <h3 className="card-title">
                    Technical Skills{" "}
                    <Link className="link-btn" to="/about">
                        All Skills
                        <svg
                            className="icon"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.16699 10H15.8337"
                                stroke="#4770FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.833 15L15.833 10"
                                stroke="#4770FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.833 5L15.833 10"
                                stroke="#4770FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </h3>

                <div className="expertise-main mt-24">
                    <div className="row g-3">
                        {skillsData.map((skill) => (
                            <div key={skill.id} className="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <img src={skill.image} alt={skill.title} loading="lazy" />
                                    </div>
                                    <div className="text">
                                        <h4 className="title">{skill.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSkills;