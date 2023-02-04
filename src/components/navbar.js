
const Navbar = ({view, setView}) => {
    return (
        <header>
            <h1 className="page-title">
                RT
            </h1>
            <nav className="text-right">
                <ul>
                    <li> <a href="https://github.com/richiethie" className="header-link" >Github</a></li>
                    <li> <a href="https://docs.google.com/document/d/16u-dr_klaieE0MXW4yWEBs_BT5sip2-7XUtd1ce1sNY/edit#heading=h.5x0d5h95i329" className="header-link" >Resume</a> </li>
                    <li> <a href="#projects" className="header-link" >Projects</a> </li>
                    <li> <a href="" className="header-link">Contact</a> </li>
                </ul>
            </nav>
        </header>
    )
}


export default Navbar