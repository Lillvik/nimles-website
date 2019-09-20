import React from "react";
import logo from "./logo.svg";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import theme, { Theme } from "./theme";

type Props = {
  theme?: Theme
}

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppHeader>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </AppHeader>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
