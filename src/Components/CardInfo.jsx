import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const CardInfo = ({ children }) => {
   return (
      <Box p={2} >
         <Heading as='h3' size='sm' boxShadow='dark-lg' p={4} borderRadius='1rem'>{children}</Heading>
      </Box>
   )
}

export default CardInfo