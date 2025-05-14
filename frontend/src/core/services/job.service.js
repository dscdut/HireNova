import axiosClient from '@/core/services/axios-client'

const API_LISTJOB_URL = '/jobs/open'
const API_CREATEJOB_URL = '/jobs'
export const jobApi = {
  listJobs() {
    return axiosClient.get(API_LISTJOB_URL)
  },
   getJobById(id) {
    return axiosClient.get(`/jobs/open/${id}`); // Lấy chi tiết công việc theo id
  },
  createJob(params) {
    return axiosClient.post(API_CREATEJOB_URL, params) // Tạo công việc mới
  },
}
