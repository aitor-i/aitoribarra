import React, { useState } from "react";

import Wrapper from "./NavBar.styles";

import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import NavElements from "./NavElements";

interface Props {
  setIsLightTheme: React.Dispatch<React.SetStateAction<Boolean>>;
  isLightTheme: Boolean;
}

const NavBar: React.FC<Props> = ({ setIsLightTheme, isLightTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="container">
        <NavElements
          setIsLightTheme={setIsLightTheme}
          isLightTheme={isLightTheme}
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

        {isOpen ? (
          <div className="container-small_elements">
            <NavElements
              setIsLightTheme={setIsLightTheme}
              isLightTheme={isLightTheme}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Wrapper>
  );
};

export default NavBar;
