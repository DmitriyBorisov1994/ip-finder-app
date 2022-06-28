import React, { useEffect, useState } from 'react'
import { getData } from '../api/axios'
import Main from './Main'

const MainContainer = () => {

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
      <Main data={IPData} isFetching={isFetching} setLanguage={setLanguage} />
   )
}

export default MainContainer