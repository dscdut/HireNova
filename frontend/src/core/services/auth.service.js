import axiosClient from '@/core/services/axios-client'

const API_LOGIN_URL = '/auth/login'
const API_REGISTER_URL = '/auth/register'

export const authApi = {
  login(params) {
    return axiosClient.post(API_LOGIN_URL, params)
  },
  register(params) {
    return axiosClient.post(API_REGISTER_URL, params)
  }
}
