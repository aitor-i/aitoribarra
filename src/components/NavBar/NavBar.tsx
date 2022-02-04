import React, { useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "./NavBar.styles";

import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ThemeButton from "../ThemeButton";

interface Props {
  setIsLightTheme: React.Dispatch<React.SetStateAction<Boolean>>;
  isLightTheme: Boolean;
}

const NavBar: React.FC<Props> = ({ setIsLightTheme, isLightTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <ThemeButton
          isLightTheme={isLightTheme}
          setIsLightTheme={setIsLightTheme}
        />
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
