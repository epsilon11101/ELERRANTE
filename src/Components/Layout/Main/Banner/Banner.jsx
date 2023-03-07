import React from "react";

import banner from "../../../../assets/banner/drone.jpg";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className={classes.banner__text}>
        <h1>ven y vive la nueva era del campismo 4x4</h1>
        <p>! off road cars and campers rentals in qroo !</p>
      </div>
      <img src={banner} alt="drone image" />
    </section>
  );
};

export default Banner;
