import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import Card from './Card'
import MySpinner from './MySpinner'
import ResponseLangSelect from './ResponseLangSelect'

const Main = ({ data, setLanguage, isFetching }) => {

   return (
      <Box as='main' p={1}>
         < Container maxW='4xl' color='white' >
            <ResponseLangSelect setLanguage={setLanguage} />
            <Heading as='h2' size='md' mb={2}>
               Информация по Вашему IP адресу...
            </Heading>
            {isFetching ? <MySpinner /> : <Card data={data} />}
         </Container >
      </Box >
   )
}

export default Main