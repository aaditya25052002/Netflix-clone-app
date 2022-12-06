import axios from './axiox';
import requests from './requests';
import React, { useEffect, useState } from 'react'
import './row.css';
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchURL, isLargeRow}) => {
    const [movies, currData] = useState([]);

    useEffect(()=>{
        async function getdata(){
            const request = await axios.get(fetchURL);
            currData(request.data.results);
            return request;
        }

        getdata();
    },[fetchURL]);
    console.log(movies);

    const [isHovering, Hover] = useState(false);

    const callmouseevent = () => {
         Hover(true);
    }

  
//${baseURL} ${isLargeRow ? movie.poster_path :movie.backdrop_path}`
  return (
     <div className='Rows'>
        <h2 className="row_title">{title}</h2>
        <div className="row_posters">
        {
            movies.map((movie) =>{return (
               <>
                <div className="image-container">
                <img src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  className={`rowcomp ${isLargeRow && "rowLarge"}`}
                  key = {movie.id}
                  alt={movie.name} 
                  onMouseEnter = {callmouseevent}
                  />
                  <div className="img-overlay">
                    <h4 className="img-title">{movie.original_name || movie.original_title}</h4>
                  </div>
                  </div>
                </>
            )})
        }
        </div>
    </div>
  )
}

export default Row;
