import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import { selectUser } from '../../features/userSlice'
import './Profilescreen.css';
import { auth } from '../firebase';

const Profilescreen = () => {
    const user = useSelector(selectUser);
  return (
    <>
    
    <div className='Profilescreen'>
        <Navbar />
        <div className="profilscreen_body">
            <h1>Edit Profile</h1>
            <div className="profilescreen_info">
                <img src="https://avatars.githubusercontent.com/u/6759280?v=4" alt="profile" />
                <div className="profilescreen_details">
                    <h2>{ user.email }</h2>

                    <h3>Plans</h3>
                    <div className="plans">
                    <h4>Your current Plan ($9.99/year)</h4> 
                    <button onClick = {() => auth.signOut()}> Unsubscribe</button>
                    </div>
               
                <div className="profilescreen_plans">
                    <button onClick = {() => auth.signOut()} className="sign_out">Sign Out</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profilescreen
