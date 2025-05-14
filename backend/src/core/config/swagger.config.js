import { HOST, PORT } from 'core/env';
import { SwaggerBuilder } from '../../packages/swagger';

const options = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'API description',
        termsOfService: '',
        contact: {
            name: 'Project Name',
            email: 'admin@gmail.com',
        },
    },
    servers: [
        {
            url: `${HOST}/v1/api`,
            description: 'Server',
            variables: {
                env: {
                    default: 'app-dev',
                    description: 'Dev Environment',
                },
                port: {
                    enum: ['8443', '5000', '443'],
                    default: PORT,
                },
                basePath: {
                    default: 'api',
                },
            },
        },
        {
            url: `http://localhost:${PORT}/v1/api`,
            description: 'Dev Env',
        },
    ],
    basePath: '/v1/api',
    auth: true,
};

export const ApiDocument = SwaggerBuilder.builder().addConfig(options);
