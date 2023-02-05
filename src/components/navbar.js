
const Navbar = ({view, setView}) => {
    return (
        <header>
            <h1 
                className="page-title"
                onClick={() => setView('home')}
            >
                <span className="page-title-accent">//</span> RT
            </h1>
            <nav className="text-right">
                <ul>
                    <li> 
                        <a  
                            className="header-link" 
                            onClick={() => setView('projects')}
                        >
                            Projects
                        </a> 
                    </li>
                    <li> 
                        <a 
                            className="header-link"
                            onClick={() => setView('resume')}
                        >
                            Resume
                        </a>
                        {/* <a href="https://docs.google.com/document/d/16u-dr_klaieE0MXW4yWEBs_BT5sip2-7XUtd1ce1sNY/edit#heading=h.5x0d5h95i329" 
                            className="header-link" 
                            >
                            Resume
                        </a>  */}
                    </li>
                    <li>
                         <a 
                            className="header-link"
                            onClick={() => setView('contact')}
                         >
                            Contact
                        </a> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Navbar