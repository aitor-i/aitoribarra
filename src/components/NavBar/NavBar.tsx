import React, { useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "./NavBar.styles";

import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="container-small">
        <div
          className="container-small_button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <ImCross size={"1.5rem"} />
          ) : (
            <FaHamburger size={"1.5rem"} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
