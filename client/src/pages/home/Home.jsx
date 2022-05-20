import Header from "../../components/Header/Header";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState } from "react";
import { useEffect } from "react";
import  axios from "axios";


const Home = ({type}) => {
  const [lists,setLists]=useState([]);
  const[genre,setGenre]=useState(null);
  useEffect(()=>{
    const getRandomLists = async () =>{
      try {
       const res = await axios.get(
         `http://localhost:8800/api/lists${type ? "?type=" +type : ""}${genre ?  "&genre=" + genre: ""}`,{
         headers:{
        token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
         },
        }
       );
       setLists(res.data);
      } catch (err){
        console.log(err);
      }
    };
    getRandomLists();
  },[type,genre]
  );
  return (
    <div className="home">
      <Header />
      <Featured type={type} setGenre= {setGenre}/>
      <>
     {lists.map((list)=>(
     <List list={list} />
     ))}
     </>
    </div>
  );
};

export default Home;
