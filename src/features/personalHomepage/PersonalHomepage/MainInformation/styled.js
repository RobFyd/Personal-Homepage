import styled from "styled-components";
// import { ButtonLink } from "../ButtonLink";
import { themeLight } from "../../../../core/App/theme";
import {ReactComponent as EnvelopeIcon} from "./envelope.svg";

export const Wrapper = styled.header`
  margin-top: -30px; // that's height of the theme switch
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Avatar = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const ThisIs = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => themeLight.colors.textPrimary};
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Summary = styled.p`
  font-size: 20px;
  margin: 36px 0 0 0;
  line-height: 1.4;
  max-width: 650px;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;
export const Icon = styled.img`
  margin-right: 8px;
  vertical-align: text-top;
`;

const ButtonLink = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20px;
  border: 1px solid ${({ theme }) => themeLight.colors.buttonLink.border};
  color: ${({ theme }) => themeLight.colors.buttonLink.text};
  border-radius: ${({ theme }) => themeLight.borderRadiusSmall};
  background: ${({ theme }) => themeLight.colors.primary};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => themeLight.colors.buttonLink.shadow};
  }

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
