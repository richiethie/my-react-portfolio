import profilePic from '../assets/profile-pic.jpeg'

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
                    <p>I am a full stack software developer that has a passion for web design, game development and learning new concepts that can develop my skills as a software engineer. I have honed my skills in React, Node.js, Axios, Express, Handlebars, SQL, Mongo, JavaScript, CSS, and HTML to develop meaningful server-side applications. I am able to collaborate and work with a team while solving problems in high-stress environments. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset. </p>
                </div>
                {/* <form action="mailto: richiethie@gmail.com">
                    <input type="submit" value="Contact Me" />
                </form> */}
            </div>  
            <div>
                <img src={profilePic} className="profile-pic" />
            </div>
        </section>
    )
}

export default About