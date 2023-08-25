import styled from "styled-components";
import α from "color-alpha";
import { themeLight } from "../../../../../../core/App/theme";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  padding: 0;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const Tile = styled.li`
  padding: 56px;
  margin: 0;
  background: ${({ theme }) => themeLight.colors.boxBackground};
  border: 6px solid ${({ theme }) => themeLight.colors.title.border};
  transition: border-color 0.3s;
  box-shadow: ${({ theme }) => themeLight.boxShadow};
  border-radius: ${({ theme }) => themeLight.borderRadiusSmall};

  &:hover {
    border-color: ${({ theme }) => themeLight.colors.title.borderHover};
  }

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => themeLight.colors.title.header};
  margin: 0;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const Links = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 8em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => themeLight.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => α(themeLight.colors.primary, 0.3)};
  padding-bottom: 1px;

  &:hover {
    border-color: unset;
  }
`;
