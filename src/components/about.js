import Capabilities from './capabilities'
import profilePic from '../assets/profile-pic.jpeg'
import serverPic from '../assets/server.jpg'
import frontEnd from '../assets/front-end.webp'
import webDesign from '../assets/web-design.jpg'
import FeaturedProjects from './featuredProjects'

// let constrain = 150;
// let mouseOverContainer = document.getElementById("ex1");
// let ex1Layer = document.getElementById("ex1-layer");

// function transforms(x, y, el) {
//   let box = el.getBoundingClientRect();
//   let calcX = -(y - box.y - (box.height / 2)) / constrain;
//   let calcY = (x - box.x - (box.width / 2)) / constrain;
  
//   return "perspective(100px) "
//     + "   rotateX("+ calcX +"deg) "
//     + "   rotateY("+ calcY +"deg) ";
// };

// function transformElement(el, xyEl) {
//   el.style.transform  = transforms.apply(null, xyEl);
// }

// mouseOverContainer.onmousemove = function(e) {
//   let xy = [e.clientX, e.clientY];
//   let position = xy.concat([ex1Layer]);

//   window.requestAnimationFrame(function(){
//     transformElement(ex1Layer, position);
//   });
// };


const About = () => {
    return(
        <div id="ex1" className='about-info-container'>
            <div className='bottom-shadow'> 
                <section  className="welcome">
                    <div className="about-me">
                        <h2 className="body-title">
                            Richie Thiesfeldt.
                        </h2>
                        <h3 className="text-header">
                            Full Stack Software Developer.
                        </h3>
                        <div className="description">
                            <p>I am a full stack software developer that has a passion for web design, game development, and learning new concepts that can develop my skills as a software engineer. I am able to collaborate and work with a team while solving problems in high-stress environments. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset. </p>
                        </div>
                        {/* <form action="mailto: richiethie@gmail.com">
                            <input type="submit" value="Contact Me" />
                        </form> */}
                    </div>  
                    <div id="ex1-layer" className='profile-pic-container'>
                        <img  src={profilePic} className="profile-pic side-a" />
                        <div className="side-b"></div>
                    </div>
                </section>
            </div>
            {/* <div className='scroll'>
                <p className='scrollText shimmer'>scroll↓</p>
            </div> */}
            <Capabilities />   
            <FeaturedProjects />     
        </div>
    )
}

// I have honed my skills in React, Node.js, Axios, Express, Handlebars, SQL, Mongo, JavaScript, CSS, and HTML to develop meaningful server-side applications.

export default About