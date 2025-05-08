import { ApiDocument } from 'core/config/swagger.config';
import { SwaggerDocument } from 'packages/swagger';

ApiDocument.addModel('RegisterDto', {
    email: SwaggerDocument.ApiProperty({ type: 'string' }),
    password: SwaggerDocument.ApiProperty({ type: 'string' }),
    name: SwaggerDocument.ApiProperty({ type: 'string' }),
});

export const RegisterDto = body => ({
    email: body.email,
    password: body.password,
    name: body.name,
});
