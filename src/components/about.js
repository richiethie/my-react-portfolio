


const About = () => {
    return(
        <section className="welcome">
            <div className="about-me">
                <h2 className="body-title">
                    Richie Thiesfeldt.
                </h2>
                <h3 className="text-header">
                    Full Stack Software Developer.
                </h3>
                <div className="description">
                    <p>I am a full stack software developer that has a passion for web design, game development and </p>
                </div>
                <form action="mailto: richiethie@gmail.com">
                    <input type="submit" value="Contact Me" />
                </form>
            </div>  
            <div>
                <img src="../assets/profile-pic.jpeg" className="profile-pic" />
            </div>
        </section>
    )
}

export default About