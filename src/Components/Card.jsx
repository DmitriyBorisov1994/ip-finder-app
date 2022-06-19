import React from 'react'
import { VStack } from '@chakra-ui/react'
import Map from './Map'
import CardInfo from './CardInfo'

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
         p={4}
         mt={4}
         bgGradient='linear(to-r, #0F2027, #203A43, #2C5364)'
      >
         <Map lat={lat} lon={lon} city={city} />
         <CardInfo>IP адрес: {query}</CardInfo>
         <CardInfo>Город: {city}</CardInfo>
         <CardInfo>Страна: {country}, {countryCode}</CardInfo>
         <CardInfo>Регион: {regionName}, {region}</CardInfo>
         <CardInfo>Zip: {zip}</CardInfo>
         <CardInfo>Провайдер: {org}</CardInfo>
      </VStack>
   )
}

export default Card