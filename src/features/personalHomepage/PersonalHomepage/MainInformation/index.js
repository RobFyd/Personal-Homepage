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
  Star1,
  Path,
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
      <Avatar
        src={isDarkTheme ? robertProfileD : robertProfileL}
        alt="Robert Fydrych"
      />
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
          <Star1 className="star1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // xml:space="preserve"
              version="1.1"
              // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
              viewBox="0 0 784.11 815.53"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <Path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></Path>
              </g>
            </svg>
          </Star1>
        </StyledButtonLink>
      </div>
    </Wrapper>
  );
};
