import React, { useEffect, useState } from 'react'
import { Box, Container, Heading, Spinner } from '@chakra-ui/react'
import axios from 'axios'

import Card from './Card'
import MySpinner from './MySpinner'

const Main = () => {

   const [IPData, setIPData] = useState({})
   const [isFetching, setIsFetching] = useState(false)

   useEffect(() => {
      setIsFetching(true)
      axios.get('http://ip-api.com/json/?lang=ru')
         .then(({ data }) => {
            setIsFetching(false)
            setIPData(data)
         });
   }, [])

   return (
      <Box as='main' p={2}>
         < Container maxW='4xl' color='white' >
            <Heading as='h2' size='md' mb={2}>
               Информация по Вашему IP адресу...
            </Heading>
            {isFetching ? <MySpinner /> : <Card data={IPData} />}
         </Container >
      </Box >
   )
}

export default Main