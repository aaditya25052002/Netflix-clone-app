import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Components/Screens/Homescreen';
import Loginscreen from './Components/Screens/Loginscreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './Components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';
import Profilescreen from './Components/Screens/Profilescreen';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //log in
        dispatch(login({
          uid : authUser.uid,
          email : authUser.email,
        }))
      }
      else {
        // log out
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      {!user ? (
        <Loginscreen /> 
      ) : 
      <Routes>
      <Route exact path='/' element = {<Homescreen/>} />
      <Route exact path ='/profile' element = {<Profilescreen />} />
     </Routes>}
          
      </BrowserRouter>
  
    </div>
  );
}

export default App;
