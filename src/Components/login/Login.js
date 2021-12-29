import React from 'react'

import useAuth from "../hooks/useAuth"

import {useNavigate} from "react-router-dom"

let btn_Style = {
    height:"40px",
    width:"60px",
    backgroundColor:"DodgerBlue"
}


function Login() {
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleLogin = ()=>{
        login()
        .then(navigate("/profile"))
    }

    return (
        <div>
            <h1>This is Login page</h1>
            <button onClick={handleLogin} style={btn_Style}>Login</button>
        </div>
    )
}

export default Login
