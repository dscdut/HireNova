import { Module } from 'packages/handler/Module';
import { RecordId } from '../../common/swagger/record-id';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { CreateJobPostingInterceptor } from 'core/modules/job/interceptor/job-posting.interceptor';
import { JobController } from './job.controller';

export const JobResolver = Module.builder()
    .addPrefix({
        prefixPath: '/jobs',
        tag: 'jobs',
        module: 'JobModule',
    })
    .register([
        {
            route: '/open/:id',
            method: 'get',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: JobController.findById,
        },
        {
            route: '/open',
            method: 'get',
            controller: JobController.getListJobOpening,
        },
        {
            route: '/',
            method: 'post',
            body: 'CreateJobPostingDto',
            interceptors: [CreateJobPostingInterceptor],
            controller: JobController.createOne,
            preAuthorization: true,
        },
    ]);
