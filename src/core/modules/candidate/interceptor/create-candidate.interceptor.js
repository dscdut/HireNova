import Joi from 'joi';
import { DefaultValidatorInterceptor } from 'core/infrastructure/interceptor';
import { JoiUtils } from '../../../utils';

export const CreateCandidateInterceptor = new DefaultValidatorInterceptor(
    Joi.object({
        user_id: Joi.number().required(),
        name: Joi.string().allow('', null),
        email: JoiUtils.email().required(),
        phone: JoiUtils.requiredString().min(7).max(15),
        note: Joi.string().allow('', null),
        summary: Joi.string().allow('', null),
        experiences: Joi.string().allow('', null),
        education: Joi.string().allow('', null),
        certifications: Joi.string().allow('', null),
        resume_file: Joi.string().uri().allow('', null), 
        cover_latter: Joi.string().uri().allow('', null),
        industry_id: Joi.number().required(),
        job_posting_id: Joi.number().required(),
        status: Joi.string().valid('Interview', 'In-Review', 'Hired', 'Rejected').default('In-Review')
    }).unknown(true)
);
