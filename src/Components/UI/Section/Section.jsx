import React from "react";

import classes from "./Section.module.scss";

const Section = (props) => {
  return (
    <section className={`${classes.section} ${props.className}`}>
      <div className={classes.section__title}>
        <h3>{props.title}</h3>
      </div>
      {props.children}
    </section>
  );
};

export default Section;
