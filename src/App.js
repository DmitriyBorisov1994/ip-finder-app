import React from 'react';
import Header from './Components/Header'
import Main from './Components/Main';
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box minH='100vh' bg='#1A202C'>
      <Header />
      <Main />
    </Box>
  );
}

export default App;
