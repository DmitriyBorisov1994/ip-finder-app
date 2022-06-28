import React, { useEffect, useState } from 'react'
import { Box, Container, Heading, Select } from '@chakra-ui/react'
import Card from './Card'
import MySpinner from './MySpinner'
import { getData } from '../api/axios'
import ResponseLangSelect from './ResponseLangSelect'

const Main = () => {

   const [IPData, setIPData] = useState({})
   const [isFetching, setIsFetching] = useState(false)
   const [language, setLanguage] = useState('ru')

   useEffect(() => {
      setIsFetching(true)
      getData(language)
         .then((response) => {
            setIsFetching(false)
            setIPData(response.data)
         });
   }, [language])

   return (
      <Box as='main' p={2}>
         < Container maxW='4xl' color='white' >
            <ResponseLangSelect setLanguage={setLanguage} />
            <Heading as='h2' size='md' mb={2}>
               Информация по Вашему IP адресу...
            </Heading>
            {isFetching ? <MySpinner /> : <Card data={IPData} />}
         </Container >
      </Box >
   )
}

export default Main