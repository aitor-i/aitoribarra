import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavElements: React.FC = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Fragment>
  );
};

export default NavElements;
