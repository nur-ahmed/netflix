import { ArrowBackIos } from "@material-ui/icons"
import { useLocation } from "react-router-dom";
import "./watch.scss";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";

export default function Watch() {
  const [userMove, setUserMove] = useState(null);
  const [timer, setTimer] = useState(null);
  const[movieID,setMovieID] = useState("");
  const[time,setTime] = useState("");
  const videoEl = useRef()


const location = useLocation()
const movie = location.movie;
console.log('movie');
console.log(movie);


const saveCurrentTime = async () => {
  try{
    await axios.post("http://localhost:8800/api/times/save", {movieID: movie?._id,time:getCurTime() },
    {

      headers:{
        token: "Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
      },
    }
       );
  }catch(err){
   console.log(err);
  }
}


  function getCurTime() { 
    let currentTime = videoEl.current?.currentTime;
    console.log('currentTime')
    console.log(currentTime)
    return currentTime
  } 
  
  function setCurTime(currentTime) { 
    videoEl.current.currentTime=currentTime;
  }

  useEffect(() => {
    setCurTime(userMove?.time || 0)
  }, [userMove])

  const getUserMove =async () => {
    try{
      const res = await axios.get(`http://localhost:8800/api/times?movieID=${movie?._id}`,{
        headers:{
          token: "Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
           },
      });
      
      setUserMove(res.data);
      if (!res.data) {
        videoEl.current?.play()
      } else {
        setCurTime(res.data?.time)
        videoEl.current?.play()
      }
    }catch(err){
      console.log(err);
    }
  };
 
  
    const startSaveWatchTime = () => {
      let _timer = setInterval(() => {
        saveCurrentTime()
      }, 15000)
      setTimer(_timer)
    }

  useEffect(async () => {
    getUserMove()
    startSaveWatchTime();
    return function cleanup() {
      console.log(`component will mount`)
      clearInterval(timer)
    }  
  }, [])


  console.log(`timer`)
  console.log(timer)

  return (
    <div className="watch">
    <Link to ="/">
      <div className="back">
      <ArrowBackIos/>
        Home
      </div>
      </Link>
      <video
        ref={videoEl}
        className="video"
        playsInline
        loop
        
        controls
        src= {movie.video} />
    </div>
  );
}
