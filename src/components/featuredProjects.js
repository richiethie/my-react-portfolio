import weDoImage from '../assets/project-images/we-do.JPG'
import moodForFoodImage from '../assets/project-images/mood-for-food.JPG'
import weatherDashboardImage from '../assets/project-images/weather-dashboard.JPG'
import workDaySchedulerImage from '../assets/project-images/work-day-scheduler.JPG'

const FeaturedProjects = () => {
    return (
        <div className="projectPage">
            <div className='projectPageFiller'>
                <div className='featuredSection'>
                    <div className="pageTitleContainer">
                        <h4 className="projectPageTitle featureTitle">Featured Projects</h4>
                        {/* <button className='submitButton'>See all</button> */}
                    </div>
                    <div className="featuredProjectList">  
                        <div className="featuredProjectCard">
                            <div className="card-left">
                                <div className="projectContainer">
                                    <div id='we-do' className='box featuredProjectImagesLeft'>
                                        <div className='slide-left'></div>
                                        <div className='filter'></div>
                                        <div id='cardStartLeft' className='projectCardContents'>
                                            <h4 className='projectTitle'>We Do</h4>
                                            <p className='projectDescription'>Find the right activity for you with We Do</p>
                                            <div className='projectLinkBG'>
                                                <a className='projectLink'>
                                                    Check it out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='blur' className='box'>
                                        <div className='box-fill-left'></div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="featuredProjectCard">
                            <div className="card-right">
                                <div className="projectContainer">
                                    <div id='mood-for-food' className='box-right featuredProjectImagesRight'>
                                        <div className='slide-right'></div>
                                        <div className='filter'></div>
                                        <div className='projectCardContents'>
                                            <h4 className='projectTitle'>Mood for Food</h4>
                                            <p id='text-right' className='projectDescription'>Find your horoscope for the day and get recommended food based on your mood</p>
                                            <div className='projectLinkBG'>
                                                <a className='projectLink'>
                                                    Check it out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='blur' className='box-right'>
                                        <div className='box-fill-right'></div>
                                    </div>
                                </div>
                                
                            </div> 
                        </div>

                        <div className="featuredProjectCard">
                            <div className="card-left">
                                <div className="projectContainer">
                                    <div id='weather-dashboard' className='box featuredProjectImagesLeft'>
                                        <div className='slide-left'></div>
                                        <div className='filter'></div>
                                        <div id='cardStartLeft' className='projectCardContents'>
                                            <h4 className='projectTitle'>Weather Dashboard</h4>
                                            <p className='projectDescription'>Search a city and check the 5 day forecast</p>
                                            <div className='projectLinkBG'>
                                                <a className='projectLink'>
                                                    Check it out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='blur' className='box'>
                                        <div className='box-fill-left'></div>
                                    </div>
                                </div>
                                
                            </div> 
                        </div>
                        <div className="featuredProjectCard">
                            <div className="card-right">
                                <div className="projectContainer">
                                    <div id='work-day-scheduler' className='box-right featuredProjectImagesRight'>
                                        <div className='slide-right'></div>
                                        <div className='filter'></div>
                                        <div className='projectCardContents'>
                                            <h4 className='projectTitle'>We Do</h4>
                                            <p id='text-right' className='projectDescription'>Find the right activity for you with We Do</p>
                                            <div className='projectLinkBG'>
                                                <a className='projectLink'>
                                                    Check it out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='blur' className='box-right'>
                                        <div className='box-fill-right'></div>
                                    </div>
                                </div>
                                
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects