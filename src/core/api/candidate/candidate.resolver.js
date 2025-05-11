import { Module } from 'packages/handler/Module';
import { RecordId, page, size } from '../../common/swagger';
import { CandidateController } from './candidate.controller';
import { hasHRRole } from 'core/modules/auth/guard';
export const CandidateResolver = Module.builder()
    .addPrefix({
        prefixPath: '/candidates',
        tag: 'candidates',
        module: 'CandidateModule',
    })
    .register([
        {
            route: '/',
            method: 'get',
            params: [page, size],
            guards: [hasHRRole],
            controller: CandidateController.getCandidate,
            preAuthorization: true,
        },
    ]);
