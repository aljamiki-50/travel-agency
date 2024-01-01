import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Button({ path, children, type, onClick, btnSize, btnStyle }) {
  const styles = [
    "btn-primary",
    "btn-danger",
    "btn-Warning",
    "btn-success",
    "btn-info",
    "btn-light",
    "btn-dark",
    "btn-light",
    btnStyle,
  ];

  // Remove the declaration of `styles` here
  const checkBtn = styles.includes(btnStyle) ? btnStyle : styles[1];

  return (
    <Link to={path}>
      <button onClick={onClick} className={`btn   ${checkBtn} `}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
