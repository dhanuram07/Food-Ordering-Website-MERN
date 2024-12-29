import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const {token, admin, setAdmin, setToken } = useContext(StoreContext);
  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logout Successfully")
    navigate("/");
  }
  return (
    <div className="navbar">
      <div className="logo-main-container">
        <div className="logo-container">
          <p>EST. 1995</p>
          <h1>AdugeMane</h1>
        </div>
        <h2>Admin</h2>
      </div>
      
      {token && admin ? (
        <p className="login-conditon" onClick={logout}>Logout</p>
      ) : (
        <p className="login-conditon" onClick={()=>navigate("/")}>Login</p>
      )}
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;