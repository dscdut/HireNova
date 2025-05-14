import { ApiDocument } from 'core/config/swagger.config';
import { SwaggerDocument } from 'packages/swagger';

ApiDocument.addModel('CreateCandidateDto', {
    user_id: SwaggerDocument.ApiProperty({ type: 'number' }),
    name: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    email: SwaggerDocument.ApiProperty({ type: 'string' }),
    phone: SwaggerDocument.ApiProperty({ type: 'string' }),
    note: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    summary: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    experiences: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    education: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    certifications: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    resume_file: SwaggerDocument.ApiProperty({ type: 'string', format: 'uri', required: false }),
    cover_letter: SwaggerDocument.ApiProperty({ type: 'string', format: 'uri', required: false }),
    status: SwaggerDocument.ApiProperty({ type: 'string', enum: ['Interview', 'In-Review', 'Hired', 'Rejected'], default: 'In-Review' }),
    industry_id: SwaggerDocument.ApiProperty({ type: 'number' }),
    score: SwaggerDocument.ApiProperty({ type: 'number' }),
    job_posting_id: SwaggerDocument.ApiProperty({ type: 'number' })
});

export const CreateCandidateDto = body => ({
    user_id: body.user_id,
    name: body.name,
    email: body.email,
    phone: body.phone,
    note: body.note,
    summary: body.summary,
    experiences: body.experiences,
    education: body.education,
    certifications: body.certifications,
    resume_file: body.resume_file,
    score: body.score,
    cover_letter: body.cover_letter,
    status: body.status || 'In-Review',
    industry_id: body.industry_id,
    job_posting_id: body.job_posting_id
});
