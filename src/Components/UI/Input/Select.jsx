import React from "react";

import classes from "./Select.module.scss";

const Select = (props) => {
  const options = props.options.map((option) => {
    return (
      <option key={option.id} value={option.value} className={classes.option}>
        {option.value}
      </option>
    );
  });

  return (
    <div className={classes.select}>
      <span>{props.title}</span>
      <select name={props.name} id={props.id}>
        {options}
      </select>
    </div>
  );
};

export default Select;
