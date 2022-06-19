import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const MySpinner = () => {
   return (
      <Box display={'flex'} justifyContent={'center'} mt={4}>
         <Spinner />
      </Box>
   )
}

export default MySpinner