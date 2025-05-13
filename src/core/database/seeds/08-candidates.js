/**
 * @param {import("knex")} knex
 */
exports.seed = async knex => {
    await knex('candidates').del();

    await knex('candidates').insert([
        {
            user_id: 3,
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '0123456789',
            note: 'Available for relocation.',
            summary: 'Experienced software engineer with expertise in web development.',
            experiences: '5 years at TechCorp as a Full-Stack Developer.',
            education: 'Bachelor of Computer Science, University of Technology.',
            certifications: 'AWS Certified Solutions Architect, Certified Scrum Master.',
            resume_file: 'resumes/user1.pdf',
            cover_letter: 'cover_letters/user1.pdf',
            status: 'In-Review',
            score: 85,
            industry_id: 1,
            job_posting_id: 1,
            deleted_at: null,
        },
        {
            user_id: 4,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '0987654321',
            note: '',
            summary: 'AI researcher with a focus on machine learning and deep learning.',
            experiences: '3 years at AI Labs as a Research Scientist.',
            education: 'PhD in Artificial Intelligence, AI University.',
            certifications: 'TensorFlow Developer Certificate.',
            resume_file: 'resumes/user2.pdf',
            cover_letter: 'cover_letters/user2.pdf',
            status: 'Interview',
            score: 85,
            industry_id: 2,
            job_posting_id: 2,
            deleted_at: null,
        },
        {
            user_id: 5,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            phone: '0909123456',
            note: 'Prefers remote positions.',
            summary: 'Cybersecurity specialist with a passion for ethical hacking.',
            experiences: '4 years at SecureTech as a Security Analyst.',
            education: 'Master of Cybersecurity, Security University.',
            certifications: 'Certified Ethical Hacker (CEH), CISSP.',
            resume_file: 'resumes/user3.pdf',
            cover_letter: 'cover_letters/user3.pdf',
            status: 'Hired',
            score: 85,
            industry_id: 3,
            job_posting_id: 3,
            deleted_at: null,
        },
    ]);
};
