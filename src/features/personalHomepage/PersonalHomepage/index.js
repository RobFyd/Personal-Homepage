import { Container } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";

export const PersonalHomepage = () => (
  <Container>
    <MainInformation />
    <main>
      <Skills />
    </main>
  </Container>
);
