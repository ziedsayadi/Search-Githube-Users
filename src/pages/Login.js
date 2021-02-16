import React from 'react'
import loginImg from "../images/login.svg"
import "./login.css"
import {useAuth0} from "@auth0/auth0-react"
function Login() {
    const {loginWithRedirect} = useAuth0()
    return (
        <div className="login_section">
            <img className="login_img" src={loginImg} alt="login_img" />
            <h1 className="login_header">Github User</h1>
            <button className="btn" onClick={loginWithRedirect}>Login</button>
        </div>
    )
}

export default Login
