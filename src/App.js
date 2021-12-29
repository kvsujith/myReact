import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Reports from './Components/Reports/Reports';
import ReportsList from './Components/Reports/ReportsList';
import Month from './Components/Reports/Month';
import Today from './Components/Reports/Today';
import Login from './Components/login/Login';
import Logout from './Components/logout/Logout';
import Protected from './Components/Protected';
import PageNotFound from './Components/PageNotFound';
import {useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import { useState } from 'react/cjs/react.development';




function App() {

  const [status,setStatus] = useState(false)

  const verify = ()=>{
    console.log("Profile verification send");
    setStatus(true)
  }

  useEffect(() => {
    console.log("Here");
    verify()
  }, [status])

  return (
    <section>
           <NavBar/>
           <div className="">
   
        <Routes>
          <Route path="/"  element={ <Home/>} />
          <Route path="profile" 
          
          element={ 
          
              <Protected>
                  <Profile/>
              </Protected>
          
            }/>

          <Route path="reports" element={<Reports/>} >
            <Route index element={<ReportsList/>} />
            <Route path="month" element={<Month/>} />
            <Route path="today" element={<Today/>} />
          </Route>

          <Route path="login"  element={ <Login/>} />
          <Route path="logout"  element={ <Logout/>} />
          <Route path="*"  element={ <PageNotFound/>} />



        </Routes>

      </div>
    </section>

    
  );
}

export default App;
