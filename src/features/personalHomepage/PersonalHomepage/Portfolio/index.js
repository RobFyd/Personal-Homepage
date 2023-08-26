import { useEffect } from "react";
import Content from "./Content";
import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import { SubHeader } from "../SubHeader";
// import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from

export const Portfolio = () => {
  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      
      <Content />
    </Section>
  );
};
