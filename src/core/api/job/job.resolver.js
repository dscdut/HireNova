import { Module } from 'packages/handler/Module';
import { RecordId } from '../../common/swagger/record-id';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { JobController } from './job.controller';
export const JobResolver = Module.builder()
    .addPrefix({
        prefixPath: '/jobs/open',
        tag: 'jobs',
        module: 'JobModule',
    })
    .register([
        {
            route: '/:id',
            method: 'get',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: JobController.findById,
        },
    ]);
