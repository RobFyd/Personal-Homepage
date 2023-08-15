import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { themeLight } from "../../../../core/App/theme";
// import {ReactComponent as EnvelopeIcon} from "./envelope.svg";

export const Wrapper = styled.header`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media(max-width: ${({theme}) => themeLight.breakpoints.tabletVertivalMax}px) {
    grid-gap: 32px;
  }

  @media(max-width: ${({theme}) => themeLight.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Avatar = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;

@media(max-width: ${({theme}) => themeLight.breakpoints.mobileMax}px) {
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
  color: ${({theme}) => themeLight.colors.textPrimary};
  margin: 12px 0 0 0;

  @media(max-width: ${({theme}) => themeLight.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;
