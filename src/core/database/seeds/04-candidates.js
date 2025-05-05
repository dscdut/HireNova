/**
 * @param {import("knex")} knex
 */

exports.seed = async knex => {
    await knex('candidates').del();

    await knex('candidates').insert([
        {
            user_id: 3,
            summary: 'Experienced software engineer with expertise in web development.',
            experiences: '5 years at TechCorp as a Full-Stack Developer.',
            education: 'Bachelor of Computer Science, University of Technology.',
            certifications: 'AWS Certified Solutions Architect, Certified Scrum Master.',
            resume_file: 'resumes/user1.pdf',
            industry_id: 1,
            deleted_at: null,
        },
        {
            user_id: 4,
            summary: 'AI researcher with a focus on machine learning and deep learning.',
            experiences: '3 years at AI Labs as a Research Scientist.',
            education: 'PhD in Artificial Intelligence, AI University.',
            certifications: 'TensorFlow Developer Certificate.',
            resume_file: 'resumes/user2.pdf',
            industry_id: 2,
            deleted_at: null,
        },
        {
            user_id: 5,
            summary: 'Cybersecurity specialist with a passion for ethical hacking.',
            experiences: '4 years at SecureTech as a Security Analyst.',
            education: 'Master of Cybersecurity, Security University.',
            certifications: 'Certified Ethical Hacker (CEH), CISSP.',
            resume_file: 'resumes/user3.pdf',
            industry_id: 3,
            deleted_at: null,
        },
    ]);
};
