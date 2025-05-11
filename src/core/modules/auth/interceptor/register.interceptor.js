import { DefaultValidatorInterceptor } from 'core/infrastructure/interceptor';
import { JoiUtils } from 'core/utils';
import Joi from 'joi';

export const RegisterInterceptor = new DefaultValidatorInterceptor(
    Joi.object({
        name: JoiUtils.requiredString().required(),
        email: JoiUtils.email().required(),
        password: JoiUtils.requiredString().required(),
        confirm_password: JoiUtils.requiredString()
            .required()
            .valid(Joi.ref('password'))
            .messages({ 'any.only': 'Passwords do not match' }),
        birthday: Joi.date().required(),
        phone_number: Joi.string().required(),
        role_id: Joi.number().default(3)
    }),
);
