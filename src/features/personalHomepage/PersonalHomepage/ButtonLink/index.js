import styled from "styled-components";
import { themeLight } from "../../../../core/App/theme";

export const ButtonLink = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20px;
  border: 1px solid ${({ theme }) => themeLight.colors.buttonLink.border};
  color: ${({ theme }) => themeLight.colors.buttonLink.text};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
