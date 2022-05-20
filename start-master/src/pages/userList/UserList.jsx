import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext} from "../../context/userContext/UserContext";
import {  deleteUser, getUsers} from "../../context/userContext/apiCalls";

export default function UserList() {
  const { users,dispatch } = useContext(UserContext)

  useEffect(() => {
    getUsers(dispatch);
     },[dispatch]);

  const handleDelete = (id) => {
    deleteUser(id,dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        
        return (
          <>
            <Link to={{pathname:"/user/" + params.row._id, user:params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r)=> r._id}
      />
    </div>
  );
}