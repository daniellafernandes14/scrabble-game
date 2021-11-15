 import React, { Component } from "react";
 import "./App.css";

 import {
   BrowserRouter as Router,
   Route,
   Routes,
   Link,
   Redirect
  } from "react-router-dom";

  //Pages
  import MainPage from "./pages";
  import NotFoundPage from "./pages/404";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route element={<NotFoundPage/>}/>
    </Routes>
  </Router>
)

export default App;
