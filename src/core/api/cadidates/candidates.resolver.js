import { Module } from 'packages/handler/Module';
import { hasAdminOrSuperAdminRole, hasAdminRole } from 'core/modules/auth/guard';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { CandidateController } from './candidates.controller';
import { RecordId } from '../../common/swagger/record-id';
import { CreateCandidateInterceptor } from 'core/modules/candidate/interceptor';
export const CandidatesResolver = Module.builder()
    .addPrefix({
        prefixPath: '/candidates',
        tag: 'candidates',
        module: 'CandidateModule',
    })
    .register([
        {
            route: '/',
            method: 'post',
            interceptors: [CreateCandidateInterceptor],
            body: 'CreateCandidateDto',
            guards: [hasAdminRole],
            controller: CandidateController.createCandidate,
            preAuthorization: false
        },
        // {
        //     route: '/',
        //     method: 'get',
        //     interceptors: [CreateUserInterceptor],
        //     body: 'CreateUserDto',
        //     controller: UserController.createOne,
        //     preAuthorization: false,
        // },
    ]);
