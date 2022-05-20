import "./newUser.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {useContext, useState} from "react";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
export default function NewUser() {
  const [user,setUser]= useState(null);
  const history = useHistory();
  const {dispatch} = useContext(UserContext);



  const handleChange = (e) =>{
    const value = e.target.value;
    setUser({...user, [e.target.name] : value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    createUser(user,dispatch);
    history.push("/users")
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"  name="email" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"  name="password" onChange={handleChange} />
        </div>
        <button className="newUserButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
