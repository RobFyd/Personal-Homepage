import styled from "styled-components";

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Link = styled.a`
  color: black;
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: auto;
`;
