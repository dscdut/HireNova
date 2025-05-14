import { ApiDocument } from 'core/config/swagger.config';
import { SwaggerDocument } from 'packages/swagger';

ApiDocument.addModel('CreateJobPostingDto', {
    userId: SwaggerDocument.ApiProperty({ type: 'integer' }),
    industryId: SwaggerDocument.ApiProperty({ type: 'integer' }),
    title: SwaggerDocument.ApiProperty({ type: 'string' }),
    description: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    location: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    descRate: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    salaryMin: SwaggerDocument.ApiProperty({ type: 'integer', required: false }),
    salaryMax: SwaggerDocument.ApiProperty({ type: 'integer', required: false }),
    level: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    startTime: SwaggerDocument.ApiProperty({ type: 'string', format: 'date-time' }),
    endTime: SwaggerDocument.ApiProperty({ type: 'string', format: 'date-time' }),
});

export const CreateJobPostingDto = body => ({
    user_id: body.userId,
    industry_id: body.industryId,
    title: body.title,
    description: body.description || null,
    location: body.location || null,
    desc_rate: body.descRate || null,
    salary_min: body.salaryMin || null,
    salary_max: body.salaryMax || null,
    level: body.level || null,
    start_time: body.startTime,
    end_time: body.endTime,
});