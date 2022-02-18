import React, { useState } from "react";

import Wrapper from "./NavBar.styles";

import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import NavElements from "./NavElements";
import { IconContext } from "react-icons";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <IconContext.Provider value={{ className: "hamburger-button" }}>
        <div className="container">
          <NavElements />
        </div>

        <div className="container-small">
          <div
            className="container-small_button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <ImCross size={"1.5rem"} color={"#020202"} />
            ) : (
              <FaHamburger size={"1.5rem"} color={"#f2f2f2"} />
            )}
          </div>

          {isOpen ? (
            <div className="container-small_elements">
              <NavElements />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </IconContext.Provider>
    </Wrapper>
  );
};

export default NavBar;
