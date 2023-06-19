import React from 'react';
import { useNavigate } from "react-router-dom";
// import { Route, Routes } from "react-router-dom"
import Header from '../components/Header';
// import Home from "./Home";
// import Products from "./Products";
// import About from "./About";

const logoutBtn = {
  marginLeft: "90%",
  position: "absolute",
  top: "25px",
}


const Dashboard = ({ setUser }) => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    setUser(false);
    sessionStorage.removeItem("token");
  };
  return (
    <div>
      <Header/>
      <button style={logoutBtn} onClick={logOut}>
    Logout
      </button>
    </div>
  )
}

export default Dashboard