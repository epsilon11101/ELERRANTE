import React from "react";

import Card from "./Card";
import classes from "./Info.module.scss";

const Info = (props) => {
  return (
    <Card className={classes.info}>
      <div className={classes.info__header}>
        <img src={props.src} />
      </div>
      <div className={classes.info__body}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default Info;
