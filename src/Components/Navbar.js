import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../images/avtaar.jpg';
import img1 from '../images/netflix_logo.png';
import './Navbar.css'

const Navbar = () => {
  const history = useNavigate();
    const [show,handleshow] = useState(true);

    const transitionnav = () => {
        if(window.scrollY > 100) {
            handleshow(false);
        }
        else {
            handleshow(true);
        }
    }

    useEffect(()=>{
      window.addEventListener("scroll",transitionnav);
      return () => window.removeEventListener("scroll",transitionnav);
    },[])
  return (

    <div className={`${!show && 'nav'}`}>
        <div className="nav_content ">
            <img src={img1} className='neflix_img' alt="" onClick={()=>{history('/')}} />
            <img src="https://avatars.githubusercontent.com/u/6759280?v=4" className='avtar' alt="img" onClick={()=>{history('/profile')}}/>
        </div>
      
    </div>    
  )
}

export default Navbar
