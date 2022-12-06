import React,{useState} from 'react'
import img from '../../images/netflix_logo.png'
import './Loginscreen.css';
import Signupscreen from './Signupscreen';
const Loginscreen = () => {

  const [signin, setsignin] = useState(false);


  return (
    
    <div className='Loginscreen'>
      <div className="login_bg">
        <img src={img} alt="" className="logo" />
        <div className="login_buttons" onClick={() => setsignin(true)}>Sign In</div>
        <div className="img-grad"></div>
      </div>
      <div className="loginscreen_body">
        {signin ? (<Signupscreen />) :
         ( 
         <>
         <h1 text-center>Unlimited movies, TV shows and more.</h1>
         <h2>Watch anywhere. Cancel anytime.</h2>
         <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
 
         <div className="loginscreen_input">
           <form action="">
           <input type="email" name="" id=""  placeholder='Email Address' autoComplete='email' maxLength='50' minLength='5'/>
           <button className='button-getstarted' onClick={() => setsignin(true) }>Get Started</button>
           </form>
         </div>
         </>)
         }
       
      </div>
    </div>
  )
}

export default Loginscreen
