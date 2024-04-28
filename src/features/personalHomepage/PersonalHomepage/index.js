import { Container, Icon } from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./skillsData";
import { Footer } from "./Footer";
import rocketIcon from "./rocket.svg";
import toolboxIcon from "./toolbox.svg";
import { Portfolio } from "./Portfolio";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <MainInformation />
    <>
      <Skills
        title={
          <>
            My skillset includes <Icon src={toolboxIcon} alt="" />
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
    </>
    <Portfolio />
    <Footer />
  </Container>
);
