import styled from "styled-components";
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

`

export const Name = styled.h3`

`

export const Description = styled.p`

`

export const Links = styled.dl`

`

export const LinksRow = styled.div`

`

export const LinksValue = styled.dd`

`

export const Link = styled.a`

`
