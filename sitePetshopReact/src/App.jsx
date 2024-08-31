import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'
import Principal from "./components/Principal/Principal";
import Login from "./components/Login/Login";

const App = () => {
  return(
    <>
  <Router>
    <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>
  </>
  )
};

export default App;
