import React from 'react'
import { Box, Heading, Divider } from '@chakra-ui/react'

const CardInfo = ({ children }) => {
   return (
      <Box>
         <Divider />
         <Heading as='h3' size='sm' p={2} boxShadow='dark-lg'>{children}</Heading>
         <Divider />
      </Box>
   )
}

export default CardInfo