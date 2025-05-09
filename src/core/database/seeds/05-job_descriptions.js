/**
 * @param {import("knex")} knex
 */

exports.seed = async knex => {
    await knex('job_descriptions').del();

    await knex('job_descriptions').insert([
        {
            title: 'Software Engineer',
            name: 'Develop and maintain web applications.',
            avatar: 'avatars/software_engineer.png',
            deleted_at: null,
        },
        {
            title: 'Data Scientist',
            name: 'Analyze and interpret complex data to drive decision-making.',
            avatar: 'avatars/data_scientist.png',
            deleted_at: null,
        },
        {
            title: 'Cybersecurity Specialist',
            name: 'Protect systems and networks from cyber threats.',
            avatar: 'avatars/cybersecurity_specialist.png',
            deleted_at: null,
        },
        {
            title: 'Cloud Architect',
            name: 'Design and manage cloud infrastructure.',
            avatar: 'avatars/cloud_architect.png',
            deleted_at: null,
        },
        {
            title: 'AI Researcher',
            name: 'Develop and implement AI models and algorithms.',
            avatar: 'avatars/ai_researcher.png',
            deleted_at: null,
        },
    ]);
};
