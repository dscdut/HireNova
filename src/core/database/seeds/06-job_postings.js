/**
 * @param {import("knex")} knex
 */
exports.seed = async knex => {
    await knex('job_postings').del();

    await knex('job_postings').insert([
        {
            user_id: 4,
            industry_id: 1,
            title: 'Full-Stack Developer',
            description:
                'Develop and maintain web applications using modern frameworks.',
            location: 'San Francisco, CA',
            salary_min: 80000,
            salary_max: 120000,
            job_description_id: 1,
            status: 'Pending',
            deleted_at: null,
        },
        {
            user_id: 4,
            industry_id: 2,
            title: 'Machine Learning Engineer',
            description:
                'Build and optimize machine learning models for AI applications.',
            location: 'New York, NY',
            salary_min: 100000,
            salary_max: 150000,
            job_description_id: 2,
            status: 'Processing',
            deleted_at: null,
        },
        {
            user_id: 4,
            industry_id: 3,
            title: 'Cybersecurity Analyst',
            description: 'Monitor and protect systems against cyber threats.',
            location: 'Austin, TX',
            salary_min: 90000,
            salary_max: 130000,
            job_description_id: 3,
            status: 'Completed',
            deleted_at: null,
        },
    ]);
};
