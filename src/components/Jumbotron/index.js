import React from "react";

function Jumbotron(props) {
  return <div className={`jumbotron text-center ${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Jumbotron;
