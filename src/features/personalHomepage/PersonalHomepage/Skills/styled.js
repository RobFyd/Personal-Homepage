import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const Section = styled.section`
  background: black;
`;

export const List = styled.ul`
  margin-top: 32px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  line-height: 1.4;
`;

export const Bullet = styled(BulletImage)`
  color: black;
`;

export const StyledHeader = styled(SubHeader)`
padding-bottom: 16px;
`

