import { ApiDocument } from 'core/config/swagger.config';
import { SwaggerDocument } from 'packages/swagger';

ApiDocument.addModel('CreateCandidateDto', {
    email: SwaggerDocument.ApiProperty({ type: 'string' }),
    fullName: SwaggerDocument.ApiProperty({ type: 'string' }),
    phone: SwaggerDocument.ApiProperty({ type: 'string' }),
    note: SwaggerDocument.ApiProperty({ type: 'string', required: false }),
    file: SwaggerDocument.ApiProperty({ type: 'string', format: 'binary' }),
});

export const CreateCandidateDto = body => ({
    email: body.email,
    full_name: body.fullName,
    phone: body.phone,
    note: body.note,
    file: body.file,
});
