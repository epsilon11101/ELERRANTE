import React from "react";

import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
