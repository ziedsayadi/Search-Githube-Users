import React from 'react'
import {Link} from 'react-router-dom'
import './error.css'
import errorImg from '../images/error.svg'
function Error() {
    return (
        <div className="error_section">
            <img src={errorImg} alt="error-img" className="error_img"/>
            <h3 className="header_error">Sorry, this page cannot be found</h3>
            <Link to="/" className="btn">Back Home</Link>
        </div>
    )
}

export default Error
