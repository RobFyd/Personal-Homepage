import styled from "styled-components";
import { themeLight } from "../../../../core/App/theme";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => themeLight.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const LetsTalk = styled.h2`

`

export const Address = styled.address`

`

export const EmailWrapper = styled.div`

`
export const EmailLink = styled.a`

`

export const Paragraph = styled.p`

`


