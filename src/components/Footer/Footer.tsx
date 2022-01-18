import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import StyledFooter from "./Footer.styles";

import { ThemeType } from "../../themes";

interface Props {
  theme: ThemeType;
}

const Footer: React.FC<Props> = ({ theme }) => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="link">
          <a href="https://github.com/aitor-i">
            <BsGithub size={theme.subtitleSize} color={theme.primaryColor} />
          </a>
        </div>
        <div className="link">
          <a href="https://www.linkedin.com/in/aitor-i-5b1b1b1b2/">
            <BsLinkedin size={theme.subtitleSize} color={theme.primaryColor} />
          </a>
        </div>
        <div className="link">
          <a href="https://www.instagram.com/ibarra__photography/">
            <BsInstagram size={theme.subtitleSize} color={theme.primaryColor} />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
