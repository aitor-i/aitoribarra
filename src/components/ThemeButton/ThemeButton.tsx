import { FiMoon, FiSun } from "react-icons/fi";
import { StyledThemeButton } from "./StyledThemeButton";

interface Props {
  setIsLightTheme: React.Dispatch<React.SetStateAction<Boolean>>;
  isLightTheme: Boolean;
}

const ThemeButton: React.FC<Props> = ({ setIsLightTheme, isLightTheme }) => {
  return (
    <StyledThemeButton
      onClick={() => setIsLightTheme((prevState) => !prevState)}
    >
      {isLightTheme ? <FiSun size={"1.5rem"} /> : <FiMoon size={"1.5rem"} />}
    </StyledThemeButton>
  );
};

export default ThemeButton;
