import axios from 'axios'
import { API_BASE_URL, API_BASE_GRAPHQL } from './../env'

const TIMEOUT = 8000

export const ApiPrivateHttp = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT
})

// ApiPrivateHttp.interceptors.request.use((config) => {
//   config['headers'] = {
//     'token': getUser().token
//   }
//   return config
// })

ApiPrivateHttp.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export const ApiHttp = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT
})

// export const BaseGraphql = axios.create({
//   baseURL: API_BASE_GRAPHQL
// })

export const BaseGraphql = API_BASE_GRAPHQL

ApiHttp.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export const Http = axios

// Http.interceptors.request.use((config) => {
//   config['headers'] = {
//     'token': getUser().token
//   }
//   return config
// })

Http.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})
