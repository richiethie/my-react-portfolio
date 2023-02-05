import profilePic from '../assets/profile-pic.jpeg'
import serverPic from '../assets/server.jpg'
import frontEnd from '../assets/front-end.webp'
import webDesign from '../assets/web-design.jpg'

const About = () => {
    return(
        <div className='about-info-container'>
            <section className="welcome">
                <div className="about-me">
                    <h2 className="body-title">
                        Richie Thiesfeldt.
                    </h2>
                    <h3 className="text-header">
                        Full Stack Software Developer.
                    </h3>
                    <div className="description">
                        <p>I am a full stack software developer that has a passion for web design, game development and learning new concepts that can develop my skills as a software engineer. I am able to collaborate and work with a team while solving problems in high-stress environments. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset. </p>
                    </div>
                    {/* <form action="mailto: richiethie@gmail.com">
                        <input type="submit" value="Contact Me" />
                    </form> */}
                </div>  
                <div className='profile-pic-container'>
                    <img src={profilePic} className="profile-pic side-a" />
                    <div className="side-b"></div>
                </div>
            </section>
            <section className='capabilities'>
                
                    <div className='mid-img-1 background-tint' >
                        <h5 className='capabilities-title'>WEB DESIGN</h5>
                        <p className='capabilities-description'>DESIGN, UX/UI</p>
                    </div>
                    <div className='mid-img-2 background-tint'>
                        <h4 className='skills'>CAPABILITIES</h4>
                        <h5 className='capabilities-title'>FRONT END</h5>
                        <p className='capabilities-description'>HTML, CSS, JS, REACT</p>
                    </div>
                    <div className='mid-img-3 background-tint'>
                        <h5 className='capabilities-title'>BACK END</h5>
                        <p className='capabilities-description'>NODE, EXPRESS, SQL, MONGO, GRAPHQL</p>
                    </div>
            </section>
        </div>
    )
}

// I have honed my skills in React, Node.js, Axios, Express, Handlebars, SQL, Mongo, JavaScript, CSS, and HTML to develop meaningful server-side applications.

export default About