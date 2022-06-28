import React from 'react'
import CardInfo from './CardInfo'
import { Box } from '@chakra-ui/react'

const CardList = ({ city, country, countryCode, query, region, regionName, zip, org, }) => {
   return (
      <Box p={2} bgGradient='linear(to-r, #0F2027, #203A43, #2C5364)' borderRadius='1rem'>
         <CardInfo>IP адрес: {query}</CardInfo>
         <CardInfo>Город: {city}</CardInfo>
         <CardInfo>Страна: {country}, {countryCode}</CardInfo>
         <CardInfo>Регион: {regionName}, {region}</CardInfo>
         <CardInfo>Zip: {zip}</CardInfo>
         <CardInfo>Провайдер: {org}</CardInfo>
      </Box>
   )
}

export default CardList