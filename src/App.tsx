import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
