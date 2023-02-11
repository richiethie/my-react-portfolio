import profilePic from '../assets/profile-pic.jpeg'

const AboutMe = () => {
    return (
        <div className='aboutMe'>
            <div className='aboutMeContainer'>
                <div className='aboutMeBackground'>
                    <div className='aboutMeHeader'>
                        <h2 className='aboutMeTitle'>Hello,</h2>
                        <div className='profilePicContainer'>
                            <img className='profile-pic' src={profilePic}/>
                            <div className='profile-pic-bg'>
                                <div className='profile-pic-bg-filler'></div>
                            </div>
                        </div>
                    </div>
                    <div className='aboutMeDescriptionContainer'>
                        <h3 className='name'>My name is <span className='gradient'>Richie Thiesfeldt</span>.</h3>
                        <p className='aboutMeText'>I am a full stack software developer that has a passion for web design, game development, and learning new concepts that can develop my skills as a software engineer.</p>
                        <p className='aboutMeText'>I am able to collaborate and work with a team while solving problems in high-stress environments.</p>
                        <p className='aboutMeText'>Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe