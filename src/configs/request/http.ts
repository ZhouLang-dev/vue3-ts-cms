import HYRequest from './request'
import { BASE_URL, TIME_OUT } from '../config'

// const http = new HYRequest({
//   baseURL: BASE_URL,
//   timeout: TIME_OUT,
//   instanceptors: {
//     requestInterceptor: (config) => {
//       return config
//     },
//     requestInterceptorCatch: (error) => {
//       return Promise.reject(error)
//     },
//     responseInterceptor: (res) => {
//       return res.data
//     },
//     responseInterceptorCatch: (error) => {
//       return Promise.reject(error)
//     }
//   }
// })

const http = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default http
