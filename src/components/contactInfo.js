import { useState } from "react";
import validator from 'validator'


const ContactInfo = () => {
    const [message, setMessage] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setMessage('')
        } else {
          setMessage('Enter valid Email!')
        }
    }

    const validateName = e => {
        var name = e.target.value
        if (name === '') {
            setMessage('Name field is required')
        }
    }

    const validateComment = e => {
        var comment = e.target.value
        if (comment === '') {
            setMessage('A comment is required')
        }
    }

    return (
        <div className="contactForm">
            <h3 className="contactTitle">Contact Me</h3>
            <form action="mailto:richiethie@gmail.com" method="post" enctype="text/plain">
                <div className="contactInputContainer">
                    <h5 className="inputTitle" >Name:</h5>
                    <input className="contactInput" id="nameInput" onChange={(e) => validateName(e)} type="text" name="name"></input>
                </div>
                <div className="contactInputContainer">
                    <h5 className="inputTitle" >E-mail:</h5>
                    <input className="contactInput" id="emailInput" onChange={(e) => validateEmail(e)} type="text" name="mail"></input>
                </div>
                <div className="contactInputContainer">
                    <h5 className="inputTitle" >Comments:</h5>
                    <textarea className="contactInput" onChange={(e) => validateComment(e)} rows="4"></textarea>
                    <h5 className="inputTitle" id="errorMessage" >{message}</h5>
                    {/* {{ if (nameInput === '') {
                        return (
                            <p className="errorMessage">This field is required</p>
                        )
                    }}} */}
                    <input className="submitButton" type="submit" value="Submit"></input>
                </div>
                {/* {{ if (emailInput =! `/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i`) {
                    return (
                        <p className="errorMessage">Must be a valid email address</p>
                    )
                } }} */}
            </form>
        </div>
    )
}

export default ContactInfo