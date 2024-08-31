import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './Login.css';

const Login = () => {
  return(
    <div>
      <form action="">
        <input type="text" placeholder="Login"/>
        <input type="password" placeholder="Senha"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
};

export default Login;