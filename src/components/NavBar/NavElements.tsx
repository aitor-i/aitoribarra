import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ThemeButton from "../ThemeButton";

interface Props {
  setIsLightTheme: React.Dispatch<React.SetStateAction<Boolean>>;
  isLightTheme: Boolean;
}

const NavElements: React.FC<Props> = ({ setIsLightTheme, isLightTheme }) => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <ThemeButton
        isLightTheme={isLightTheme}
        setIsLightTheme={setIsLightTheme}
      />
    </Fragment>
  );
};

export default NavElements;
