 import React from "react";
 import "./App.css";

 import {
   BrowserRouter as Router,
   Route,
   Routes,
   Link,
  } from "react-router-dom";

  //Pages
  import MainPage from "./pages";
  import AnswerPage from "./pages/answer";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/answer" element={<AnswerPage/>} />
    </Routes>
  </Router>
)

export default App;
