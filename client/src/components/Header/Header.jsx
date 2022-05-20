import {ExitToAppOutlined} from "@material-ui/icons";
import "./Header.scss"
import {Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch} = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (

    <div className={isScrolled ? "header scrolled" : "header"}>
        <div className="container">
          <div className= "left"> 
              <h3> starmix </h3> 
              <div className= "center"> 
                  <Link to="/" className="link">
                  <span>Home</span>  
                  </Link> 
                  
                  <Link to="/series" className="link" >
                  <span>Series</span>
                  </Link> 

                  <Link to="/movies" className="link" >
                  <span>Movies</span> 
                  </Link> 
              </div>                
          </div>
          <div className="right">
                  <div className="profile">
                    <button onClick={ ()=> dispatch(logout())} className="button">
                          <ExitToAppOutlined/>
                          <span className="logout ">  Logout</span>
                    </button>
                  </div>
              </div>
          </div>
    </div>

    );
}


export default Header;