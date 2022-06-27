import axios from 'axios'

const instance = axios.create({
   baseURL: 'http://ip-api.com/json'
})

export const getData = (lang) => {
   return instance.get('?lang=' + lang)
}