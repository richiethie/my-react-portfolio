
const ContactInfo = () => {
    return (
        <div className="contactForm">
            <h3 className="contactTitle">Contact Me</h3>
            <form action="mailto:richiethie@gmail.com" method="post" enctype="text/plain">
                <div className="contactInputContainer">
                    <h5 className="inputTitle" >Name:</h5>
                    <input className="contactInput" type="text" name="name"></input>
                </div>
                <div className="contactInputContainer">
                    <h5 className="inputTitle" >E-mail:</h5>
                    <input className="contactInput" type="text" name="mail"></input>
                </div>
                <div className="contactInputContainer">
                    <h5 className="inputTitle" >Comments:</h5>
                    <textarea className="contactInput" rows="4"></textarea>
                    
                    <input className="submitButton" type="submit" value="Submit"></input>
                </div>
                
            </form>
        </div>
    )
}

export default ContactInfo