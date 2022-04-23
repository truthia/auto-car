import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HompPage } from './app/containers/HomePage';

const AppContainer = styled.div`
  ${
    tw`
    w-full
    h-full
    flex
    flex-col text-yellow-400
    `
  }
`

function App() {
  return (
   <AppContainer>
     <HompPage />
   </AppContainer>
  );
}

export default App;
 