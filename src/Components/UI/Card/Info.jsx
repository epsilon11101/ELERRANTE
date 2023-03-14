import React from "react";

import Card from "./Card";
import Section from "../Section/Section";
import classes from "./Info.module.scss";

const Info = (props) => {
  return (
    <Card className={`${classes.info} ${props.className}`}>
      <div className={classes.info__header}>
        <img src={props.src} />
      </div>
      <div className={classes.info__body}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      {props.children}
    </Card>
  );
};

export default Info;
