import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./NavBar.styles";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </Wrapper>
  );
};

export default NavBar;
