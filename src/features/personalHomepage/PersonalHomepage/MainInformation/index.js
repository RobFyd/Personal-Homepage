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

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={robertFydrychProfile} alt="Robert Fydrych" />
    <div>
        <ThisIs>This is</ThisIs>
        <Name>Robert Fydrych</Name>
        <Summary>
          
        </Summary>
    </div>
  </Wrapper>
);
