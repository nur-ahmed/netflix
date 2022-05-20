import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./register.scss";
import  axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history= useHistory();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
 

   const handleFinish =async (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    try{
      await axios.post("http://localhost:8800/api/auth/register", {username,email,password});
      history.push("/login");
    }catch(err){

    }
  };
  return (
    <div className="register">
      <div className= "left"> 
          <h3> starmix </h3>
      </div>
      <form>
          <div className="container">
            <h2 className="sign">Hesap oluştur</h2>
            <div className="accountButton">
                <label for="exampleInputEmail1">Kullanıcı adı</label>
                <input type="username" ref={usernameRef}/>
                <label for="exampleInputEmail1">Email adres</label>
                <input type="email"ref={emailRef}/>
                <label for="exampleInputPassword1">Parola</label>
                <input type="password"ref={passwordRef}/>

            </div>
                <button className="loginButton" onClick={handleFinish} > Gönder</button>
            <div className="informations">
                <p>Hesabınız var mı? <a href="/Login">oturum aç</a></p>
                
            </div>
          </div>
    </form>
  </div>
  );
}
