import React, { useState } from "react";

import Wrapper from "./NavBar.styles";

import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import NavElements from "./NavElements";
import { IconContext } from "react-icons";

interface Props {
  setIsLightTheme: React.Dispatch<React.SetStateAction<Boolean>>;
  isLightTheme: Boolean;
}

const NavBar: React.FC<Props> = ({ setIsLightTheme, isLightTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <IconContext.Provider value={{ className: "hamburger-button" }}>
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
              <ImCross size={"1.5rem"} color={"#020202"} />
            ) : (
              <FaHamburger size={"1.5rem"} color={"#f2f2f2"} />
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
      </IconContext.Provider>
    </Wrapper>
  );
};

export default NavBar;
