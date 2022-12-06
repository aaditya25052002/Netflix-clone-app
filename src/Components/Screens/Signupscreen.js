import React,{useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './Signupscreen.css';

const Signupscreen = () => {
    const emailref = useRef(null);
    const passref = useRef(null); 
    const history = useNavigate();
    const register = (e) =>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(
        emailref.current.value,
        passref.current.value
      ).then((authuser)=>{
              console.log(authuser)
      })
      .catch((error)=>{
        alert(error.message)
      });
    }
  
    const inbox = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(
        emailref.current.value,
        passref.current.value
      ).then((authuser)=>{
              console.log(authuser)
      })
      .catch((error)=>{
        alert(error.message)
      });
    }
  return (
    <div className='signup'>
      <form >
        <h1>Sign In</h1>
       <div className='random'> <input ref = {emailref} type="email"   placeholder='Enter your email'/> </div>
       <div className='random'> <input ref = {passref} type="password"  placeholder='Enter your password'/></div>
        <button onClick={inbox}> <span onClick = {()=>{history('/')}}>Sign In </span></button>
        <h4><span className='gray'>New to netflix?</span> <span className='up' onClick={register}>Signup now.</span></h4>
      </form>
    </div>
  )
}

export default Signupscreen
