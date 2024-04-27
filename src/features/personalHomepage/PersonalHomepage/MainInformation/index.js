import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../../../common/themeSlice.js";
import {
  Avatar,
  StyledButtonLink,
  ButtonIcon,
  Name,
  Summary,
  ThisIs,
  Wrapper,
  Icon,
  Icon2,
} from "./styled.js";
import { email } from "../email";
import faceIcon from "./faceIcon.png";
import laptopIcon from "./laptopIcon.png";
import robertProfileL from "./PH1.jpeg";
import robertProfileD from "./PH2.jpeg";

export const MainInformation = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <Avatar src={isDarkTheme ? robertProfileD : robertProfileL} alt="Robert Fydrych" />
      <div>
        <ThisIs>This is</ThisIs>
        <Name>Robert Fydrych</Name>
        <Summary>
          <Icon src={faceIcon} alt="" />
          <Icon2 src={laptopIcon} alt="" />
          {/* ⌨️🖱️ */}I am a passionate Frontend Developer deepening my
          knowledge in React, currently looking for new job opportunities.
        </Summary>
        <StyledButtonLink href={`mailto:${email}`} title={email}>
          <ButtonIcon />
          Hire me
        </StyledButtonLink>
      </div>
    </Wrapper>
  );
};
