import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axiox';
import  requests from './requests';
import vid from '../Videos/Netflix-Ad.mp4'
const Banner = () => {

  const full = (string,number) =>{
      document.write(string.substr(number,string.length))
  }

const truncate = (string, number) =>{
  return string?.length > number? string.substr(0, number-1) + '...' : string;
}

  const[movie, setMovie] = useState([]);
  useEffect(()=>{
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      );
      return request;
    }
    fetchdata();

  },[])
  console.log(movie);

  const [show, showFun] = useState(false);
 const callfun = () => {
   showFun(true);
 }


  return (
    <div className='banner'>
  
      <header className="bannerclass" style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }} onMouseOver={callfun}>

        <div className="img-gradient"></div>

        {
         show ? (<div className='videos'>
         <video autoPlay={true} loop = {true} playsInline={true} muted>
           <source src={vid} type='video/mp4'/>
         </video>
       </div>) : (null)
        }
        
          </header>
          
        
        <div className="banner_content">
        <div className="banner_title">{movie?.original_name || movie?.title || movie?.name }</div>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="movie_description">{truncate(`${movie.overview}`,150)}</div>
        <div className="banner_fadebottom"></div>
        </div>
    
    </div>
  
  )
}

export default Banner
