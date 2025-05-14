import axiosClient from '@/core/services/axios-client'

const API_LISTINDUSTRY_URL = '/industries/'

export const industryApi = {
  listIndustry() {
    return axiosClient.get(API_LISTINDUSTRY_URL)
  },
}
