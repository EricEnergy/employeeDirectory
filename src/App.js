import {BrowserRouter as Router, Route} from "react-router-dom"
import React from 'react';
import './App.css';
import Index from "./Pages/index";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/employeedirectory" component={Index}/>
      {/* <Route exact path="/ao" component={AO} />
      <Route path="/contact" component={Contact} />
      <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
