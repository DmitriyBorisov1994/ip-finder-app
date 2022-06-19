import React from 'react'
import { VStack, Box, Heading, Divider } from '@chakra-ui/react'
import Map from './Map'

const Card = ({ data }) => {

   const {
      city,
      country,
      countryCode,
      query,
      region,
      regionName,
      zip,
      org,
      lat,
      lon
   } = data

   return (
      <VStack
         spacing={3}
         align='stretch'
         border='1px'
         borderRadius='1rem'
         p={2}
         mt={4}
         bgGradient='linear(to-r, #0F2027, #203A43, #2C5364)'
      >
         <Map lat={lat} lon={lon} city={city} />
         <Box>
            <Heading as='h3' size='sm'>IP адрес: {query}</Heading>
         </Box>
         <Divider />
         <Box>
            <Heading as='h3' size='sm'>Город: {city}</Heading>
         </Box>
         <Divider />
         <Box>
            <Heading as='h3' size='sm'>Страна: {country}, {countryCode}</Heading>
         </Box>
         <Divider />
         <Box>
            <Heading as='h3' size='sm'>Регион: {regionName}, {region}</Heading>
         </Box>
         <Divider />
         <Box>
            <Heading as='h3' size='sm'>Zip: {zip}</Heading>
         </Box>
         <Divider />
         <Box>
            <Heading as='h3' size='sm'>Провайдер: {org}</Heading>
         </Box>
      </VStack>
   )
}

export default Card