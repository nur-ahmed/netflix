import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import './components/Header/Header.scss'
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter as Router,Switch,Route, Redirect }from "react-router-dom";
import { useContext } from "react";
import{ AuthContext} from "./authContext/AuthContext";

const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <Router>
   <Switch>
     <Route exact path="/">
       { user ? <Home/> : <Redirect to="/register"/>}
     </Route>
     <Route  path="/login">
     {! user ? <Login/> : <Redirect to="/"/>}
     </Route>
     <Route  path="/Register">
     {! user ? <Register/> : <Redirect to="/"/>}
     </Route>
     <Route exact path="/">
       <Home/>
     </Route>
     {user &&(
       <>
     <Route path="/movies">
       <Home type="movies"/>
     </Route>
     <Route path="/series">
       <Home type="series"/>
     </Route>
     <Route path="/watch">
       <Watch/>
     </Route>
     </>
     )}
     </Switch>
     </Router>
  
  );
};

export default App;