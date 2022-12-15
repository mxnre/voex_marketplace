import axios, { AxiosRequestConfig } from 'axios'
import VoexStorage from 'utils/voex.storage'

const strApiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_BASE_URL,
})

strApiAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {}
  }
  config.headers['Authorization'] = VoexStorage.getItem('strapi-jwt', '')
  return config
})

export default strApiAxios
