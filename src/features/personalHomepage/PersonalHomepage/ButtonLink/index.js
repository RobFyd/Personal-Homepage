import styled from "styled-components";
// import { themeLight } from "../../../../core/App/theme";

export const ButtonLink = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  color: #ffffff;
  border-radius: 4px;
  background: #0366d6;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 3px 3px 3px 3px;
  }
`;
