import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size + " text-center bg-dark mr-1" } {...props}  />;
}

export default Col;
