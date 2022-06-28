import React from 'react';
import Header from './Components/Header'
import { Box } from '@chakra-ui/react'
import MainContainer from './Components/MainContainer';

function App() {
  return (
    <Box minH='100vh' bg='#1A202C'>
      <Header />
      <MainContainer />
    </Box>
  );
}

export default App;
