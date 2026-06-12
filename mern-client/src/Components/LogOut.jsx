import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const LogOut = () => {

   const  {logOut} = useContext(AuthContext);
   const location = useLocation();
   const navigate= useNavigate();
   const from =location.state?.from?.pathname || "/";
  const handleLogout = () =>{
    logOut().then(() => {
        // Sign-out successful.
        alert("Sign-out successfully!!!")
        navigate(from,{replace:true})
      }).catch((error) => {
        // An error happened.
      });
      
         
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <button type="button" className="btn btn-danger" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  )
}

export default LogOut
