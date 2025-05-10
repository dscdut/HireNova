import { DataRepository } from 'packages/restBuilder/core/dataHandler/data.repository';

class JobRepository extends DataRepository {
    findById(id) {
    return this.query()
        .innerJoin('users', 'users.id', 'job_postings.user_id')
        .innerJoin('industries', 'industries.id', 'job_postings.industry_id')
        .innerJoin('job_descriptions', 'job_descriptions.id', 'job_postings.job_description_id')
        .where('job_postings.id', '=', id)
        .select(
            'job_postings.id',
            'job_postings.title',
            'job_postings.description',
            'job_postings.location',
            'job_postings.salary_min',
            'job_postings.salary_max',
            'job_postings.status',
            'job_postings.level',
            { industryName: 'industries.name' },
        )
        .first();
}
}

export const JobPostingsRepository = new JobRepository('job_postings');