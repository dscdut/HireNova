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
            status: 'To Do',
            desc_rate: 'High demand for full-stack developers.',
            start_time: '2025-05-15 09:00:00',
            end_time: '2025-06-15 18:00:00',
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
            status: 'In Progress',
            desc_rate: 'AI and ML are growing fields with high salaries.',
            start_time: '2025-05-20 10:00:00',
            end_time: '2025-06-20 17:00:00',
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
            status: 'Done',
            desc_rate: 'Cybersecurity is critical for modern organizations.',
            start_time: '2025-05-10 08:00:00',
            end_time: '2025-06-10 16:00:00',
            deleted_at: null,
        },
         {
            user_id: 4,
            industry_id: 2,
            title: 'Cybersecurity Analyst',
            description: 'Monitor and protect systems against cyber threats.',
            location: 'Austin, TX',
            salary_min: 90000,
            salary_max: 130000,
            status: 'Closed',
            desc_rate: 'Cybersecurity is critical for modern organizations.',
            start_time: '2025-05-10 08:00:00',
            end_time: '2025-06-10 16:00:00',
            deleted_at: null,
        },
    ]);
};
