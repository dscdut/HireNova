import { ApiDocument } from 'core/config/swagger.config';
import { SwaggerDocument } from 'packages/swagger';

ApiDocument.addModel('RegisterDto', {
    email: SwaggerDocument.ApiProperty({ type: 'string' }),
    password: SwaggerDocument.ApiProperty({ type: 'string' }),
    confirm_password: SwaggerDocument.ApiProperty({ type: 'string' }),
});

export const RegisterDto = body => ({
    email: body.email,
    password: body.password,
    confirm_password: body.confirm_password,
});
