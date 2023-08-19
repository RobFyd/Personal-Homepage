import styled from "styled-components";
import { themeLight } from "../../../../core/App/theme";

export const SubHeader = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => themeLight.colors.textPrimary};

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
