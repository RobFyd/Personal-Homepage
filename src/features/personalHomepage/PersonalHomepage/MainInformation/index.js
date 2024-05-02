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
  Star2,
  Star3,
  Star4,
  Star5,
  Star6,
  Path,
} from "./styled.js";
import { email } from "../email";
import reactIcon from "./react.svg";
import desktopIcon from "./desktop.svg";
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
          <Icon src={desktopIcon} alt="" />
          <Icon2 src={reactIcon} alt="" />I am a passionate Frontend Developer
          deepening my knowledge in React, currently looking for new job
          opportunities.
        </Summary>
        <StyledButtonLink href={`mailto:${email}`} title={email}>
          <ButtonIcon />
          Hire me
          <Star1 className="star1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 784.11 815.53"
            >
              <g id="Layer_x0020_1">
                <Path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></Path>
              </g>
            </svg>
          </Star1>
          <Star2 className="star2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 784.11 815.53"
            >
              <g id="Layer_x0020_1">
                <Path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></Path>
              </g>
            </svg>
          </Star2>
          <Star3 className="star3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 784.11 815.53"
            >
              <g id="Layer_x0020_1">
                <Path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></Path>
              </g>
            </svg>
          </Star3>
          <Star4 className="star4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 784.11 815.53"
            >
              <g id="Layer_x0020_1">
                <Path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></Path>
              </g>
            </svg>
          </Star4>
          <Star5 className="star5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 784.11 815.53"
            >
              <g id="Layer_x0020_1">
                <Path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></Path>
              </g>
            </svg>
          </Star5>
          <Star6 className="star6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 784.11 815.53"
            >
              <g id="Layer_x0020_1">
                <Path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></Path>
              </g>
            </svg>
          </Star6>
        </StyledButtonLink>
      </div>
    </Wrapper>
  );
};
