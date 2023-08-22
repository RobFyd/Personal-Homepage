import styled from "styled-components";
import { themeLight } from "../../../../../core/App/theme";

export const List = styled.ul`
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;

    @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
      margin-right: 16px;
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => themeLight.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => themeLight.colors.primary};
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: auto;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    width: 32px;
  }
`;
