import React, { useEffect, useState } from 'react'
import { Box, Container, Heading, Select } from '@chakra-ui/react'
import Card from './Card'
import MySpinner from './MySpinner'
import { getData } from '../api/axios'

const Main = () => {

   const [IPData, setIPData] = useState({})
   const [isFetching, setIsFetching] = useState(false)
   const [language, setLanguage] = useState('ru')

   useEffect(() => {
      setIsFetching(true)
      console.log(language)
      getData(language)
         .then((response) => {
            console.log(response)
            setIsFetching(false)
            setIPData(response.data)
         });
   }, [language])

   return (
      <Box as='main' p={2}>
         < Container maxW='4xl' color='white' >
            <Select mt={2} mb={2} placeholder='Select language' onChange={(e) => setLanguage(e.target.value)}>
               <option value='ru'>Russian</option>
               <option value='zh-CN'>中国 (Chinese)</option>
               <option value='de'>Deutsch (German)</option>
               <option value='es'>Español (Spanish)</option>
               <option value='pt-BR'>Português - Brasil (Portuguese)</option>
               <option value='en'>English</option>
            </Select>
            <Heading as='h2' size='md' mb={2}>
               Информация по Вашему IP адресу...
            </Heading>
            {isFetching ? <MySpinner /> : <Card data={IPData} />}
         </Container >
      </Box >
   )
}

export default Main