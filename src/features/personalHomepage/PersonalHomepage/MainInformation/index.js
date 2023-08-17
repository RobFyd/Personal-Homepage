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
        <Icon src={laptopIcon} alt="" />
        I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Summary>
      <StyledButtonLink href={'mailto:${email}'} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
