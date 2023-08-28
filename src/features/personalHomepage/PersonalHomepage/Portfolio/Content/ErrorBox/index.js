import { StyledButtonLink } from "../../../MainInformation/styled";
import { ReactComponent as WarningIcon } from "./warning.svg";
import { Header, Paragraph, Wrapper } from "./styled";
import { githubUsername } from "../../githubUsername";

export const Error = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Ooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github&nbsp;projects.
      <br />
      You can check them directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <StyledButtonLink
      href={`https://github.com/${githubUsername}`}
      target="_blank"
    >
      Go to Github
    </StyledButtonLink>
  </Wrapper>
);
