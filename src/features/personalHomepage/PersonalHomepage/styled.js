import styled from "styled-components";

export const Container = styled.main`
  max-width: 1248px;
  padding: 16px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const Icon = styled.img`
  @keyframes shake {
    0%,
    5%,
    10%,
    15%,
    20%,
    80%,
    85%,
    90%,
    95%,
    100% {
      transform: rotate(0deg) translateX(0);
    }
    25% {
      transform: rotate(-8deg) translateX(-4px);
    }
    50% {
      transform: rotate(8deg) translateX(4px);
    }
    75% {
      transform: rotate(-8deg) translateX(-4px);
    }
  }
  animation: shake 0.8s ease infinite;
  vertical-align: middle;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 24px;
  }
`;

export const Icon2 = styled.img`
  @keyframes rocket {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(-1px, 3px) rotate(-1deg);
    }
    50% {
      transform: translate(0, 0) rotate(0deg);
    }
    75% {
      transform: translate(1px, -3px) rotate(1deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  animation: rocket 1.5s ease-in-out infinite;
  vertical-align: middle;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 24px;
  }
`;
