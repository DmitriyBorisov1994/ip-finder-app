import React from 'react'
import { Select } from '@chakra-ui/react'

const ResponseLangSelect = ({ setLanguage }) => {
   return (
      <Select mt={2} mb={2} onChange={(e) => setLanguage(e.target.value)}>
         <option value='ru'>Русский </option>
         <option value='zh-CN'>中国</option>
         <option value='de'>Deutsch</option>
         <option value='es'>Español</option>
         <option value='pt-BR'>Português - Brasil (Portuguese)</option>
         <option value='en'>English</option>
      </Select>
   )
}

export default ResponseLangSelect