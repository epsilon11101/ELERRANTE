import React from "react";

import Nav from "../Nav/Nav";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Nav />
    </header>
  );
};

export default Header;
