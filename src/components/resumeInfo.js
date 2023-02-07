import Capabilities from './capabilities'

const ResumeInfo = () => {
    return (
        <div className="resumePageContainer">
            <div className='resumeContents'>
                <p className="resumeText">
                    <a href="https://docs.google.com/document/d/16u-dr_klaieE0MXW4yWEBs_BT5sip2-7XUtd1ce1sNY/" 
                        target="_blank" 
                        className="resumeLink">
                            My Resume 
                    </a>
                    <i className="bi bi-file-person-fill">
                    </i>
                </p>
                <p className='resumeDescription'>Some of my skills as a developer include Web Design, Front end development using HTML, CSS, JS and React, and also Back end using Node.js, Express.js, SQL, Mongo, and GraphQL. </p>
                <Capabilities />
            </div>
        </div>

    )
}

export default ResumeInfo