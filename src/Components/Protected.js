import React from 'react'
import { Navigate } from 'react-router-dom'

import useAuth from "./hooks/useAuth"


let styleMargin = {
    margin:"10px"
}

function Protected({children}) {

    const {authed} = useAuth()

    return (
        <div style={styleMargin} >
                    This is protected page.
          
                { authed? children:<Navigate to="/login"/>}
        </div>  
    )
}

export default Protected
