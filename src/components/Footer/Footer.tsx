import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

import StyledFooter from "./Footer.styles";

import { ThemeType } from "../../themes";

interface Props {
  theme: ThemeType;
}

const Footer: React.FC<Props> = ({ theme }) => {
  return (
    <StyledFooter>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <div className="container">
          <div className="link">
            <a href="https://github.com/aitor-i">
              <BsGithub size={theme.subtitleSize} />
            </a>
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/aitor-i-5b1b1b1b2/">
              <BsLinkedin size={theme.subtitleSize} />
            </a>
          </div>
          <div className="link">
            <a href="https://www.instagram.com/ibarra__photography/">
              <BsInstagram size={theme.subtitleSize} />
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </StyledFooter>
  );
};

export default Footer;
