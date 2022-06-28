import React from 'react'
import { VStack } from '@chakra-ui/react'
import Map from './Map'
import CardList from './CardList'

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
         spacing={2}
         align='stretch'
         border='2px'
         borderRadius='1rem'
         mt={4}
      >
         <Map lat={lat} lon={lon} city={city} />
         <CardList
            country={country}
            countryCode={countryCode}
            query={query}
            region={region}
            regionName={regionName}
            zip={zip}
            org={org}
         />
      </VStack>
   )
}

export default Card