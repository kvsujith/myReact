import './Profile.css';

import useAuth from "../hooks/useAuth"
import {useNavigate} from "react-router-dom"

function Profile() {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    logout()
      .then(navigate("/"))
  }
  return (
    <div className='section'>
        <h1>This is Profile Page</h1>

        <button onClick={handleLogout}>Logout</button>
    </div>
    
  );
}

export default Profile


