import weDoImage from '../assets/project-images/we-do.JPG'
import moodForFoodImage from '../assets/project-images/mood-for-food.JPG'
import weatherDashboardImage from '../assets/project-images/weather-dashboard.JPG'
import workDaySchedulerImage from '../assets/project-images/work-day-scheduler.JPG'

const FeaturedProjects = () => {
    return (
        <div className="projectPage">
            <div className='featuredSection'>
                <div className="pageTitleContainer">
                    <h4 className="projectPageTitle featureTitle">Featured Projects</h4>
                    {/* <button className='submitButton'>See all</button> */}
                </div>
                <div className="featuredProjectList">
                    <div className='featuredContainer'>    
                        <div className="flip-card featuredProjectCard">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={weDoImage} className="featuredProjectImages"></img>
                                </div>
                                <div className="flip-card-back">
                                    <a href="https://github.com/richiethie" target="_blank" className="projectLink" >
                                        <h6 className='projectCardTitle'>WE DO</h6>
                                    </a>
                                    
                                </div>
                            </div> 
                        </div>
                        <div className="flip-card featuredProjectCard">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={moodForFoodImage} className="featuredProjectImages"></img>
                                </div>
                                <div className="flip-card-back">
                                    <a href="https://github.com/richiethie" target="_blank" className="projectLink" >
                                        <h6 className='projectCardTitle2'>Mood for Food</h6>
                                    </a>
                                    
                                </div>
                            </div> 
                        </div>


                    </div>
                    <div className='featuredContainer'>
                        <div className="flip-card featuredProjectCard">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={weatherDashboardImage} className="featuredProjectImages"></img>
                                </div>
                                <div className="flip-card-back">
                                    <a href="https://github.com/richiethie" target="_blank" className="projectLink" >
                                        <h6 className='projectCardTitle3'>Weather Dashboard</h6>
                                    </a>
                                    
                                </div>
                            </div> 
                        </div>
                        <div className="flip-card featuredProjectCard">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={workDaySchedulerImage} className="featuredProjectImages"></img>
                                </div>
                                <div className="flip-card-back">
                                    <a href="https://github.com/richiethie" target="_blank" className="projectLink" >
                                        <h6 className='projectCardTitle4'>Work Day Scheduler</h6>
                                    </a>
                                    
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