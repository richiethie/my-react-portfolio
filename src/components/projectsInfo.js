import weDoImage from '../assets/project-images/we-do.JPG'
import moodForFoodImage from '../assets/project-images/mood-for-food.JPG'
import weatherDashboardImage from '../assets/project-images/weather-dashboard.JPG'
import workDaySchedulerImage from '../assets/project-images/work-day-scheduler.JPG'

// const projectCard = document.getElementsByClassName('projectCard')
// const projectCardTitle = document.getElementsByClassName('projectCardTitle')

// const displayProjectText = (e) => {
//     console.log(e)
// }

// projectCard.addEventListener('mouseover', displayProjectText)

const ProjectInfo = () => {
    return (
        <div className="projectPage">
            <div className="projectContainer">
                <div className="pageTitleContainer">
                    <h4 className="projectPageTitle">Featured Projects</h4>
                </div>
                <div className="projectList">
                    <div className="flip-card projectCard">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={weDoImage} className="projectImages"></img>
                            </div>
                            <div className="flip-card-back">
                                <a href="https://github.com/richiethie" target="_blank" className="projectLink" >
                                    <h6 className='projectCardTitle'>WE DO</h6>
                                </a>
                                
                            </div>
                        </div> 
                    </div>
                    <div className="flip-card projectCard">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={moodForFoodImage} className="projectImages"></img>
                            </div>
                            <div className="flip-card-back">
                                <a href="https://github.com/richiethie" target="_blank" className="projectLink">
                                    <h6 className='projectCardTitle2'>MOOD FOR FOOD</h6>
                                </a>
                                
                            </div>
                        </div> 
                    </div>
                    <div className="flip-card projectCard">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={weatherDashboardImage} className="projectImages"></img>
                            </div>
                            <div className="flip-card-back">
                                <a href="https://github.com/richiethie" target="_blank" className="projectLink">
                                    <h6 className='projectCardTitle3'>WEATHER DASHBOARD</h6>

                                </a>
                                
                            </div>
                        </div> 
                    </div>
                    <div className="flip-card projectCard">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={workDaySchedulerImage} className="projectImages"></img>
                            </div>
                            <div className="flip-card-back">
                                <a href="https://github.com/richiethie" target="_blank" className="projectLink">
                                    <h6 className='projectCardTitle4'>WORK DAY SCHEDULER</h6>

                                </a>
                                
                            </div>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo