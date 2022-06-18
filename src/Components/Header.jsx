import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'

const Header = () => {
   return (
      <Box as='header' p={2}>
         <Container maxW='4xl' color='white'>
            <Heading as='h2' size='lg'>IP-Finder</Heading>
         </Container>
      </Box>
   )
}

export default Header