import { ApiDocument } from 'core/config/swagger.config';
import { SwaggerDocument } from 'packages/swagger';

ApiDocument.addModel('RegisterDto', {
    name: SwaggerDocument.ApiProperty({ type: 'string' }),
    email: SwaggerDocument.ApiProperty({ type: 'string' }),
    password: SwaggerDocument.ApiProperty({ type: 'string' }),
    confirm_password: SwaggerDocument.ApiProperty({ type: 'string' }),
    birthday: SwaggerDocument.ApiProperty({ type: 'string', format: 'date' }),
    phone_number: SwaggerDocument.ApiProperty({ type: 'string' }),
    role_id: SwaggerDocument.ApiProperty({ type: 'number' }),
});

export const RegisterDto = body => ({
    name: body.name,
    email: body.email,
    password: body.password,
    confirm_password: body.confirm_password,
    birthday: body.birthday,
    phone_number: body.phone_number,
    role_id: body.role_id ?? 3,
});
