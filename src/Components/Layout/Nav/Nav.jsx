import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logo/mainLogo.png";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes["nav__menu"]}>
        <FontAwesomeIcon icon={faBars} />
        <span>Menu</span>
      </div>
      <div className={classes["nav__logo"]}>
        <img src={logo} alt="logo el errante" />
      </div>
    </nav>
  );
};

export default Nav;
