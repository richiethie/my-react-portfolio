const Footer = ({view, setView}) => {
    return (
        <footer id="links">
            <div className="footerIcons" >
                <i className="bi bi-envelope" onClick={() => setView('contact')}>
                </i>
                <a href="https://twitter.com/richiethie" target="_blank" className="footerLink" >
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="https://github.com/richiethie" target="_blank" className="footerLink" >
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/richiethie/" target="_blank" className="footerLink" >
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            <p className="footerText">© 2022-2023 Richie Thiesfeldt</p>
        </footer>
    )
}



export default Footer