import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <AppHeader/> 
    </Container>
  );
}

export default App;
