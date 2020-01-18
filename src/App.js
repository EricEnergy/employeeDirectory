import {BrowserRouter as Router, Route} from "react-router-dom"
import React from 'react';
import './App.css';
import index from "./Pages/index";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={index}/>
      </div>
    </Router>
  );
}

export default App;
