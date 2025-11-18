const AllSkills = () => {

    const allSkills = [
        { id: 1, image: "assets/img/icons/html-5.svg", title: "HTML" },
        { id: 2, image: "assets/img/icons/css3.svg", title: "CSS" },
        { id: 3, image: "assets/img/icons/javascript.svg", title: "JavaScript" },
        { id: 4, image: "assets/img/icons/react.svg", title: "React Js" },
        { id: 5, image: "assets/img/icons/redux.svg", title: "Redux" },
        { id: 6, image: "assets/img/icons/jest.svg", title: "Jest" },
        { id: 7, image: "assets/img/icons/tailwind-css.svg", title: "Tailwind CSS" },
        { id: 8, image: "assets/img/icons/typescript.svg", title: "Typescript" },
        { id: 9, image: "assets/img/icons/java.svg", title: "Java" },
        { id: 10, image: "assets/img/icons/bootstrap.png", title: "Bootstrap" },
        { id: 11, image: "assets/img/icons/firebase.svg", title: "Firebase" },
        { id: 12, image: "assets/img/icons/figma.svg", title: "Figma" },
        { id: 13, image: "assets/img/icons/nextjs.svg", title: "Next Js" },
        { id: 14, image: "assets/img/icons/netlify.svg", title: "Netlify" },
        { id: 15, image: "assets/img/icons/git.svg", title: "Git" },
        { id: 16, image: "assets/img/icons/gitlab.svg", title: "GitLab" },
        { id: 17, image: "assets/img/icons/github.svg", title: "GitHub" },
        { id: 18, image: "assets/img/icons/jquery.svg", title: "JQuery" },
        { id: 19, image: "assets/img/icons/postgresql.svg", title: "Postgresql" },
        { id: 20, image: "assets/img/icons/postman.svg", title: "Postman" },
        { id: 21, image: "assets/img/icons/mui.svg", title: "Material UI" },
        { id: 22, image: "assets/img/icons/mysql.svg", title: "MySQL" },
        { id: 23, image: "assets/img/icons/rtl.png", title: "RTL" },
        { id: 24, image: "assets/img/icons/gsap.png", title: "GSAP" },
        { id: 25, image: "assets/img/icons/vite.svg", title: "Vite" },
        { id: 26, image: "assets/img/icons/vscode.svg", title: "VS Code" },
        { id: 27, image: "assets/img/icons/sql.svg", title: "SQL" },
        { id: 28, image: "assets/img/icons/jira.svg", title: "Jira" },
        { id: 29, image: "assets/img/icons/react-router.svg", title: "React Router" },
        { id: 30, image: "assets/img/icons/vercel.svg", title: "Vercel" },
        { id: 31, image: "assets/img/icons/canva.png", title: "Canva" },
        { id: 32, image: "assets/img/icons/formik.png", title: "Formik" },
        { id: 33, image: "assets/img/icons/tanstack-query.png", title: "TanStack Query" },
        { id: 33, image: "assets/img/icons/shadcn.ico", title: "Shadcn" },
    ]

    return (
        <>
            {/* <div class="card expertise-card">
                <div class="card-body p-4">
                    <div class="expertise-main">
                        <div class="row g-3">
                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/html-5.svg" alt="zeplin" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">HTML</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/css3.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">CSS</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/javascript.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">JavaScript</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/react.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">React Js</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/redux.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Redux</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/jest.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Jest</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/tailwind-css.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Tailwind CSS</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/typescript.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Typescript</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/java.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title"> Java </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/bootstrap.png" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Bootstrap</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/firebase.svg" alt="figma" className="img-fluid" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Firebase</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/figma.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Figma</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/nextjs.svg" alt="figma" className="img-fluid" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Next Js</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-2 col-md-2 col-sm-3 col-4">
                                <div class="expertise-item">
                                    <div class="image text-center">
                                        <img src="assets/img/icons/netlify.svg" alt="figma" />
                                    </div>
                                    <div class="text">
                                        <h4 class="title">Netlify</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}


            <div className="card expertise-card">
                <div className="card-body p-4">
                    <div className="expertise-main">
                        <div className="row g-3">
                            {allSkills.map((item) => {
                                return (
                                    <div key={item.id} className="col-xl-2 col-md-2 col-sm-3 col-4">
                                        <div className="expertise-item">
                                            <div className="image text-center">
                                                <img src={item.image} alt={item.title} className="img-fluid" loading="lazy" />
                                            </div>
                                            <div className="text">
                                                <h4 className="title">{item.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllSkills;