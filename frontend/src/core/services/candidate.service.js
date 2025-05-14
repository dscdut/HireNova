import axiosClient from '@/core/services/axios-client'

export const candidateApi = {
   listCandidate(id) {
    return axiosClient.get(`/candidates/job/${id}`); // Lấy chi tiết công việc theo id
  },
}
