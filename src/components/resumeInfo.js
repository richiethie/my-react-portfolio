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
                            <i className="bi bi-file-person-fill">
                            </i>
                    </a>
                </p>
                <p></p>
                <Capabilities />
            </div>
        </div>

    )
}

export default ResumeInfo