import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";
import { themeLight } from "../../../../core/App/theme";

export const Section = styled.section`
  margin-top: 72px;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const StyledGithubIcon = styled(GithubIcon)`
  color: ${({ theme }) => themeLight.colors.primary};
  margin-bottom: 8px;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MyRecentProjects = styled.h3`
  font-weight: normal;
  margin-top: 8px;
  font-size: 20px;
  color: ${({ theme }) => themeLight.colors.textPrimary};

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;
