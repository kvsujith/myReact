import './NavBar.css';

import {NavLink} from "react-router-dom"
import useAuth from "../hooks/useAuth"
import {useNavigate} from "react-router-dom"


function NavBar() {

const {logout} = useAuth()
const navigate = useNavigate()

const handleLogout = ()=>{
  logout()
    .then(navigate("/logout"))
}


  return (
    <nav className="navbar navbar-expand-lg navbar-dark z-depth-0 header">
    <ul className="navbar-nav">
        <li className="nav-item text-primary " >
        <NavLink to="/" ><img src="/images/userShield.png" height="30" width="30" alt=""/>: <b className="text-primary h6">Check Post</b></NavLink></li>
    </ul>
    <ul className="navbar-nav ml-auto">
        <li className="nav-item text-primary ">  <NavLink to="/"  onClick={handleLogout} className="h6 "> <img src="/images/logout.png" height="30" width="30" alt=""/></NavLink></li>
    </ul>
    </nav>
       
  )
}

export default NavBar

