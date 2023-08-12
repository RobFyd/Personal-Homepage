import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersonalHomepage } from "";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from "";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};
