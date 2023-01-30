import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import ThemeSwitcher from "Components/ThemeSwitcher";

import { GlobalStyle } from "./Components/GlobalStyle";

import { ThemeProvider } from "styled-components";

import {
  lightTheme,
  darkTheme
} from "Components/UI/themes";
import { ThemeButton } from "Components/UI";


function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(theme => !theme);
  }

  const verifyTheme = theme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={verifyTheme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        <ThemeSwitcher theme={theme} />
      </ThemeButton>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
