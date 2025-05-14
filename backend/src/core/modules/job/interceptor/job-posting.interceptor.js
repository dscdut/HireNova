import Joi from 'joi';
import { DefaultValidatorInterceptor } from 'core/infrastructure/interceptor';
import { JoiUtils } from '../../../utils';

export const CreateJobPostingInterceptor = new DefaultValidatorInterceptor(
    Joi.object({
        userId: JoiUtils.positiveNumber().required(),
        industryId: JoiUtils.positiveNumber().required(),
        title: JoiUtils.requiredString().min(1),
        description: JoiUtils.optionalString(),
        location: JoiUtils.optionalString(),
        descRate: JoiUtils.optionalString(),
        salaryMin: JoiUtils.optionalInteger(),
        salaryMax: JoiUtils.optionalInteger(),
        level: JoiUtils.optionalString(),
        startTime: JoiUtils.requiredDateTime(),
        endTime: JoiUtils.requiredDateTime().greater(Joi.ref('startTime')), 
    })
);