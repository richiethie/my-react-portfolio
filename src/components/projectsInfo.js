
const ProjectInfo = () => {
    return (
        <div>
            <div className="projects">
            <a id="projects"></a>
            <h2 className="project-title">
            Projects
            </h2>
        </div>
        <section>
            <div className="display-project">
                <div className="project-column">
                    <figure className="project-card">
                        <h3 className="card-header">
                            Mood for Food
                        </h3>
                        <p className="card-text">Group project built to serve as a daily horoscope for a user to use and also be recommended a new meal recipe based on the user's current mood.</p>
                        <a href="https://kevinkraiss.github.io/mood-for-food/" className="card-link" >
                            <img src="./assets/images/mood-for-food-webpage.JPG" alt="Prework Study Guide Image" className="card-image" />
                        </a>
                    </figure>
                </div>
                <div className="project-column">
                    <figure className="project-card">
                        <h3 className="card-header">
                           We Do
                        </h3>
                        <p className="card-text">We Do is an application that users are able to create an account and login to see events of all different types in their area. Results are displayed based on the zip code they are currently located in. A user can also post new events for others to join.</p>
                        <a href="https://we-do-application.herokuapp.com/" className="card-link" >
                            <img src="./assets/images/we-do-homepage.JPG" alt="Live We Do application homepage" className="card-image" />
                        </a>
                    </figure>
                </div>
                <div className="project-column">
                    <figure className="project-card">
                        <h3 className="card-header">
                            landing-page
                        </h3>
                        <p className="card-text">This was a website that I built to serve as a page to collect information from a visitor.</p>
                        <a href="https://richiethie.github.io/landing-page/" className="card-link" >
                            <img src="./assets/images/landing-page-pic.png" alt="Picture of my Landing Page Website" className="card-image" />
                        </a>
                    </figure>
                </div>
                <div className="project-column">
                    <figure className="project-card">
                        <h3 className="card-header">
                            week-1-challenge
                        </h3>
                        <p className="card-text">In this project, I fixed a broken HTML link, and I also condensed a very large CSS file to help the wesite run efficiently.</p>
                        <a href="https://richiethie.github.io/week-1-challenge/Develop/" className="card-link" >
                            <img src="./assets/images/week-1-challenge-pic.png" alt="My website I edited for Week 1 Challenge" className="card-image" />
                        </a>
                    </figure>
                </div>
                <div className="project-column">
                    <figure className="project-card">
                        <h3 className="card-header">
                            css-snippets
                        </h3>
                        <p className="card-text">I created a new website from scratch in this project. I learned how to use a flexbox layout for a website in building this.</p>
                        <a href="https://richiethie.github.io/css-snippets/" className="card-link" >
                            <img src="./assets/images/css-snippets-pic.png" alt="CSS Snippets website I built from scratch" className="card-image" />
                        </a>
                    </figure>
                </div>
                <div className="project-column">
                    <figure className="project-card">
                        <h3 className="card-header">
                            my-dev-portfolio
                        </h3>
                        <p className="card-text">This is currently a website I made to display the projects I have created, and showcase new concepts I learn throughout my bootcamp.</p>
                        <a href="https://github.com/richiethie/my-dev-portfolio" className="card-link" >
                            <img src="./assets/images/dev-portfolio-repo.png" alt="Repository for this website" className="card-image" />
                        </a>
                    </figure>
                </div>
            </div>
        </section>
        </div>
    )
}

export default ProjectInfo