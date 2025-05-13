import { Module } from 'packages/handler/Module';
import { RecordId, page, size, keyword} from '../../common/swagger';
import { CandidateController } from './candidate.controller';
import { hasHRRole } from 'core/modules/auth/guard';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { CreateCandidateInterceptor } from 'core/modules/candidate/interceptor';

export const CandidateResolver = Module.builder()
    .addPrefix({
        prefixPath: '/candidates',
        tag: 'candidates',
        module: 'CandidateModule',
    })
    .register([
        {
            route: '',
            method: 'get',
            params: [page, size],
            guards: [hasHRRole],
            controller: CandidateController.getCandidate,
            preAuthorization: true,
        },
        {
            route: '/job/:id',
            method: 'get',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: CandidateController.findById,
        },
        {
            route: '/search',
            method: 'get',
            params: [page, size, keyword],
            guards: [hasHRRole],
            controller: CandidateController.searchCandidate,
            preAuthorization: true,
        },
        {
            route: '',
            method: 'post',
            interceptors: [CreateCandidateInterceptor],
            body: 'CreateCandidateDto',
            controller: CandidateController.createCandidate,
            preAuthorization: true
        },
    ]);
