import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";

export const Wrapper = styled.header`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Avatar = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Summary = styled.p`
  font-size: 20px;
  margin: 36px 0 0 0;
  line-height: 1.4;
  max-width: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;

export const Icon = styled.img`
  margin-right: 6px;
  vertical-align: text-top;
`;

export const Icon2 = styled.img`
  margin-right: 12px;
  vertical-align: text-top;
`;

// const ButtonLink = styled.a`
//   text-decoration: none;
//   padding: 12px 16px;
//   font-weight: 600;
//   font-size: 20px;
//   background-image: ${({ theme }) => theme.gradients};
//   background-size: 290%;
//   background-position: left;
//   transition: 0.8s;
//   border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
//   color: ${({ theme }) => theme.colors.buttonLink.text};
//   border-radius: ${({ theme }) => theme.borderRadiusSmall};
//   /* background: ${({ theme }) => theme.colors.primary}; */
//   /* transition: box-shadow 0.3s; */

//   &:hover {
//     /* box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow}; */
//     background-position: right;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
//     font-size: 18px;
//   }
// `;

export const ButtonLink = styled.a`
  text-decoration: none;
  position: relative;
  padding: 12px 35px;
  background: #4c83fa;
  font-size: 17px;
  font-weight: 1000;
  color: #ffffff;
  border: 3px solid #4c83fa;
  border-radius: 8px;
  box-shadow: 0 0 0 #ffffff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #4c83fa;
    box-shadow: 0 0 0px #4c83fa;
  }

  &:hover .star1 {
    position: absolute;
    top: -80%;
    left: -30%;
    width: 25px;
    height: auto;
    filter: drop-shadow(0 0 0px #4c83fa);
    z-index: 2;
  }
`;

export const Star1 = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #4c83fa);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
`;

export const Path = styled.path`
  fill: #4c83fa;
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
