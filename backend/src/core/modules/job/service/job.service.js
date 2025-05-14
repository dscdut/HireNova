import { JobPostingsRepository } from '../job.repository.js';

class JobService {
    constructor() {
        this.repository = JobPostingsRepository;
    }

    async getJobDetailsById(id) {
        const jobDetails = await this.repository.findById(id);
        if (!jobDetails) {
            throw new Error('Job posting not found');
        }
        return jobDetails;
    }

    async createOne(jobPostingData) {
        const jobPosting = await this.repository.create(jobPostingData);
        return jobPosting;
    }
    async getListJobOpening() {
        const jobOpenings = await this.repository.findAll();
        return jobOpenings;
    }
}

export const JobPostingsService = new JobService();