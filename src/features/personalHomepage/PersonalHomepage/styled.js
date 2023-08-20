import styled from "styled-components";
import { themeLight } from "../../../core/App/theme";

export const Container = styled.main`
  max-width: 1248px;
  padding: 16px;
  margin: auto;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    height: 16px;
  }
`;
