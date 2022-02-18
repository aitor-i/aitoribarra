import { FiMoon, FiSun } from "react-icons/fi";
import { StyledThemeButton } from "./StyledThemeButton";

import { IconContext } from "react-icons";

interface Props {
  setIsLightTheme: React.Dispatch<React.SetStateAction<Boolean>>;
  isLightTheme: Boolean;
}

const ThemeButton: React.FC<Props> = ({ setIsLightTheme, isLightTheme }) => {
  return (
    <StyledThemeButton
      onClick={() => setIsLightTheme((prevState) => !prevState)}
    >
      <IconContext.Provider value={{ className: "theme-button" }}>
        {isLightTheme ? <FiSun size={"1.5rem"} /> : <FiMoon size={"1.5rem"} />}
      </IconContext.Provider>
    </StyledThemeButton>
  );
};

export default ThemeButton;
