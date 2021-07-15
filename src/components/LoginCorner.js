import React from "react";
import { Link } from 'react-router-dom'
import "../styles/loginCorner.css";
import login from "../assets/login.png";
import AuthService from "../services/auth.service"


const LoginCorner = () => {
  return (
    AuthService.isStudent() ?
      <Link className="LoginCorner" to="/dashboard">
        <img src={login} alt="Dashboard" />
      </Link>
      : AuthService.isAdmin() ?
        <Link className="LoginCorner" to="/dashboard/admin">
          <img src={login} alt="Dashboard" />
        </Link>
        : AuthService.isTeacher() ?
          <Link className="LoginCorner" to="/dashboard/instructor">
            <img src={login} alt="Dashboard" />
          </Link>
          :
          <Link className="LoginCorner" to="/login">
            <img src={login} alt="Login" />
          </Link>
  );
};
export default LoginCorner;
