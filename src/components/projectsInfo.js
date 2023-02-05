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
                    <div className="we-do projectCard">
                        <h6 className='projectCardTitle'>WE DO</h6>
                        <img src={weDoImage} className="projectImages"></img>
                    </div>
                    <div className="mood-for-food projectCard">
                        <h6 className='projectCardTitle'>MOOD FOR FOOD</h6>
                        <img src={moodForFoodImage} className="projectImages"></img>
                    </div>
                    <div className="weather-dashboard projectCard">
                        <h6 className='projectCardTitle'>WEATHER DASHBOARD</h6>
                        <img src={weatherDashboardImage} className="projectImages"></img>
                    </div>
                    <div className="work-day-scheduler projectCard">
                        <h6 className='projectCardTitle'>WORK DAY SCHEDULER</h6>
                        <img src={workDaySchedulerImage} className="projectImages"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo