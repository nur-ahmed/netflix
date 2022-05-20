import {
    CalendarToday,
    PermIdentity,
  } from "@material-ui/icons";
  import { Link ,useLocation} from "react-router-dom";
  import "./user.css";
  
  export default function User() {
    const location = useLocation();
    const user = location.user;
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle"> User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
            
              <div className="userShowTopTitle">
                <span className="userShowUsername">User</span>
              </div>
            </div>
            <div className="userShowBottom">
           
              <div className="userShowInfo">
              <span className="userShowUsername">User: </span>
                <span className="userShowInfoTitle">{user.username}</span>
              </div>
              <div className="userShowInfo">
              <span className="userShowUsername">Email: </span>
                <span className="userShowUsername">{user.email}</span>
              </div>

              
            
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                  
                </div>
                <div className="userUpdateItem">
                  <label>Password</label>
                  <input
                    type="text"
                    placeholder="*******"
                    className="userUpdateInput"
                  />
                  
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                
                 
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }