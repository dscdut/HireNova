import { Module } from 'packages/handler/Module';
import { IndustryController } from './industry.controller';

export const IndustryResolver = Module.builder()
    .addPrefix({
        prefixPath: '/industries',
        tag: 'industries',
        module: 'IndustryModule',
    })
    .register([
        {
            route: '/',
            method: 'get',
            controller: IndustryController.getAll,
            preAuthorization: true,
        },
    ]);