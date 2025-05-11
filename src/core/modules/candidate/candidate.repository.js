import { DataRepository } from 'packages/restBuilder/core/dataHandler/data.repository';

class Repository extends DataRepository {
    createCandidate(survey, trx) {
        if (trx) return this.query().insert(survey).transacting(trx);
        return this.query().insert(survey);
    }

}

export const CandidateRepository = new Repository('candidates');
