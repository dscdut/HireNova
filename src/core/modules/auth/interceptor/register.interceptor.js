import { DefaultValidatorInterceptor } from 'core/infrastructure/interceptor';
import { JoiUtils } from 'core/utils';
import Joi from 'joi';

export const RegisterInterceptor = new DefaultValidatorInterceptor(
    Joi.object({
        email: JoiUtils.email().required(),
        password: JoiUtils.requiredString().required(),
        name: JoiUtils.requiredString().required(),
    }),
);
