import Joi from 'joi';
import { DefaultValidatorInterceptor } from 'core/infrastructure/interceptor';
import { JoiUtils } from '../../../utils';

export const CreateCandidateInterceptor = new DefaultValidatorInterceptor(
    Joi.object({
        email: JoiUtils.email().required(),
        fullName: JoiUtils.requiredString().min(1),
        phone: JoiUtils.requiredString().min(7).max(15),
        note: Joi.string().allow('', null),
        file: Joi.any().required(),
    }).unknown(true)
);
