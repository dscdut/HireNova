import { DataRepository } from 'packages/restBuilder/core/dataHandler/data.repository';

class JobRepository extends DataRepository {
    findById(id) {
    return this.query()
        .innerJoin('users', 'users.id', 'job_postings.user_id')
        .innerJoin('industries', 'industries.id', 'job_postings.industry_id')
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
    create(jobPostingData) {
        return this.query().insert(jobPostingData)
                           .returning([
                            'title',
                            'description',
                            'location',
                            'desc_rate as descRate',
                            'salary_min as salaryMin',
                            'salary_max as salaryMax',
                            'level',
                            'start_time as startTime',
                            'end_time as endTime',
                        ]);
    }
    findAll(filters = {}) {
        const query = this.query()
            .innerJoin('industries', 'industries.id', 'job_postings.industry_id')
            .whereNull('job_postings.deleted_at')
            .select(
                'job_postings.id',
                'job_postings.title',
                'job_postings.status',
                'job_postings.description',
                'job_postings.location',
                'job_postings.level',
                'job_postings.start_time as startTime',
                'job_postings.end_time as endTime',
                'job_postings.salary_min as salaryMin',
                'job_postings.salary_max as salaryMax',
                'industries.name as industryName',
                'job_postings.created_at as createdAt'
            );

        if (filters.status) {
            query.where('job_postings.status', filters.status);
        }

        return query;
    }
}

export const JobPostingsRepository = new JobRepository('job_postings');