import axios from "axios"
import { createtUserFailure, createUserStart, createUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess } from "./UserActions";


export const getUsers = async (dispatch) =>{
  dispatch(getUsersStart());
    try{
     const res = await axios.get("http://localhost:8800/api/users", {
    headers:
    {token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
     },
    });
    dispatch(getUsersSuccess(res.data))
    }catch(err){
      dispatch(getUsersFailure());
    }
};
//CREATE
export const createUser = async (user,dispatch) =>{
  dispatch(createUserStart());
    try{
      const res = await axios.post("http://localhost:8800/api/auth/register",user, {
    headers:
    {token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
     },
    });
    dispatch(createUserSuccess(res.data));
    }catch(err){
      dispatch(createtUserFailure());
    }
};
//Delete
export const deleteUser = async (id,dispatch) =>{
  dispatch(deleteUserStart());
    try{
      await axios.delete("http://localhost:8800/api/users/" +id, {
    headers:
    {token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
     },
    });
    dispatch(deleteUserSuccess(id))
    }catch(err){
      dispatch(deleteUserFailure());
    }
};