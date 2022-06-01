import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const {dispatch} = useContext(AuthContext);

  const handleLogin =async (e) => {
    e.preventDefault();
    login({email,password},dispatch);
  };
  return (
    <div className= "login">
        <div className= "left"> 
             <h3> StartMix </h3>
        </div>
        <div className="container">
            <form>
                <h2 className="sign"> Giriş yap</h2>
                <div className="accountButton">
                    <label for="exampleInputEmail1">Email adres</label>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
                    <label for="exampleInputPassword1">Parola</label>
                    <input type="password"onChange={(e)=> setPassword(e.target.value)} />

                </div>
                    
                    <button className="loginButton" onClick={handleLogin}>Giriş yap</button>
                
                <div className="informations">
                    <p>yeni hesap oluştur? <a href="/register">kayıt ol</a></p>
                    
                </div>
            </form>

        </div>
    </div>
  );
}
