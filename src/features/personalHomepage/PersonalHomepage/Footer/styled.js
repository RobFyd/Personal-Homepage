import styled from "styled-components";
import { themeLight } from "../../../../core/App/theme";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const LetsTalk = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: initial;
  margin: 0;
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    margin: 12px 0;
  }
`;

export const EmailLink = styled.a`
  color: ${({ theme }) => themeLight.colors.textPrimary};
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => themeLight.colors.primary};
  }

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  max-width: 670px;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => themeLight.colors.textPrimary};
  margin: 0;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
