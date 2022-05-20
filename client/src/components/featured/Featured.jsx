import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import "./featured.scss";
import axios from "axios";

export default function Featured({ type  }) {
  const [content,setContent] =useState({});
  const [genre , setGenre] =useState("");

  useEffect(()=>{
   const getRandomContent = async ()=>{
     try{
     const res= await axios.get(`http://localhost:8800/api/movies/random?type=${type}`,{
     headers:{
      token: "Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
       },
      });
     setContent(res.data[0]);
     }catch(err){
       console.log(err);
     }
   };
   getRandomContent();
  },[type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span >Lütfen istediğiniz {type === "series" ? "series " : "movies"} türü seçiniz</span>
          <select name="genre" id="genre" onChange={(e)=> setGenre(e.target.value)} >

            <option>Genre</option>
              <option value="comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="children">children</option>
              <option value="Drama">horror</option>
              <option value="Drama">romantic</option>
              <option value="Drama">action</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        
           <div className="desc">
             <span>{content.desc}</span>
           </div>
      </div>
    </div>
  );
}
