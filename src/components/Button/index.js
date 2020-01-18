import React from "react";
import "./style.css";

function Button(props) {
const color = props.color.split(" ").map(size => " btn-" + size).join(" ");

  return (
    <button onClick={props.onClick} className={`btn  ${props.fluid ? "-fluid" : ""}` + color } style={{width:'25%'}} {...props} />
  );
}

export default Button;

