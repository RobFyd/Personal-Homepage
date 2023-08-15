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
`
