import { JobPostingsRepository } from '../job.repository.js';

class JobService {
    async getJobDetailsById(id) {
        const jobDetails = await JobPostingsRepository.findById(id);
        if (!jobDetails) {
            throw new Error('Job posting not found');
        }
        return jobDetails;
    }
}

export const JobPostingsService = new JobService();