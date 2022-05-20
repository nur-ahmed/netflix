import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers,setNewUsers]=useState([]);
  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
      const res =await axios.get("http://localhost:8800/api/users?new=true",{
        headers: {
          token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
           },
      });
      setNewUsers(res.data);
      }catch(err){
          console.log(err);
        }
    };
    getNewUsers();
  },[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://pbs.twimg.com/profile_images/1174258791560437760/V-713lP7_400x400.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
          ))}
      </ul>
    </div>
  );
}
