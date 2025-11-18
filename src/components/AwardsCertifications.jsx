import { Link } from "react-router-dom";

const AwardsCertifications = () => {

    const awardsData = [
        {
            id: 1,
            link: "#",
            image: "assets/img/about-us/qu.png",
            title: "Quantum University",
            subtitle: "B.Tech (CSE)",
            tag: "Silver Medalist"
        },
        {
            id: 2,
            link: "https://www.hackerrank.com/certificates/46c57a27a0e7",
            image: "assets/img/icons/javascript.svg",
            title: "JavaScript",
            subtitle: "",
            tag: "HackerRank"
        },
        {
            id: 3,
            link: "https://www.hackerrank.com/certificates/0fc2badda59c",
            image: "assets/img/icons/java.svg",
            title: "Java",
            subtitle: "",
            tag: "HackerRank"
        },
        {
            id: 4,
            link: "https://www.hackerrank.com/certificates/b98fadcef0f5",
            image: "assets/img/icons/css3.svg",
            title: "CSS",
            subtitle: "",
            tag: "HackerRank"
        },
        {
            id: 5,
            link: "https://drive.google.com/file/d/173Czvx7rXcDk6Zw0zcLDdouJXpEiU-3v/view",
            image: "assets/img/icons/internshala-icon.jpg",
            title: "Web Development",
            subtitle: "",
            tag: "Internshala"
        }
    ];

    return (
        <div className="awards-recognitions">
            <h2 className="main-common-title">Awards and Certifications</h2>
            <div className="awards-recognitions-main">
                <ul className="list-unstyled">
                    {awardsData.map((award) => (
                        <li key={award.id}>
                            <Link to={award.link} className="d-block w-100">
                                <div className="awards-item">
                                    <div className="award-name">
                                        <div className="icon">
                                            <img
                                                src={award.image}
                                                alt={award.title}
                                                className="img-fluid"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="text">
                                            <h4 className="title">{award.title}</h4>
                                            {award.subtitle && <p className="year">{award.subtitle}</p>}
                                        </div>
                                    </div>
                                    <div className="winner-tag">
                                        <h4 className="title">
                                            {/* SVG icon same as your original */}
                                            <svg
                                                className="icon"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            {award.tag}
                                        </h4>
                                    </div>
                                    <div className="project-btn">
                                        <span>
                                            View Certification
                                            <svg
                                                className="arrow-up"
                                                width="14"
                                                height="15"
                                                viewBox="0 0 14 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.91634 4.5835L4.08301 10.4168"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4.66699 4.5835H9.91699V9.8335"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AwardsCertifications;
