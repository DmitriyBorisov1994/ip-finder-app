import React, { useEffect, useState } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import axios from 'axios'

import Card from './Card'

const Main = () => {

   const [IPData, setIPData] = useState({})

   useEffect(() => {
      axios.get('http://ip-api.com/json/?lang=ru')
         .then(({ data }) => {
            console.log(data)
            setIPData(data)
         });
   }, [])

   return (
      <Box as='main' p={2}>
         < Container maxW='4xl' color='white' >
            <Heading as='h2' size='md' mb={2}>
               Информация по Вашему IP адресу...
            </Heading>
            <Card data={IPData} />
         </Container >
      </Box >
   )
}

export default Main