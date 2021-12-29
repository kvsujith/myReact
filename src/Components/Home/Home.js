import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='section'>
        <h1>This is Home Page</h1>
        <NavLink to="profile">Profile</NavLink>
    </div>
    
  );
}

export default Home;


