import robertFydrychProfile from "./PH.jpg";
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

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={robertFydrychProfile} alt="Robert Fydrych" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Robert Fydrych</Name>
      <Summary>
        <Icon src={faceIcon} alt="" />
        <Icon2 src={laptopIcon} alt="" />
        {/* ⌨️🖱️ */}
         I am a passionate Frontend Developer
        deepening my knowledge in React, currently looking for new job
        opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
