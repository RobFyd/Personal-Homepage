import { Container, Icon } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./skillsData";
import toolsIcon from "./toolsIcon.png";
import rocketIcon from "./rocketIcon.png";

export const PersonalHomepage = () => (
  <Container>
    <MainInformation />
    <main>
      <Skills
        title={
          <>
            My skillset includesc <Icon src={toolsIcon} alt="" />
          </>
        }
        skills={skills}
      />
      <Skills
        title={
          <>
            What I want to learn next <Icon src={rocketIcon} alt="" />
          </>
        }
        skills={nextSkills}
      />
    </main>
  </Container>
);
